import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Navbar from './shared/Navbar';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true); // Update the local state
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob)); // Update Redux state
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)); // Sync state
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <>
        <Navbar />
        <div className="max-w-7xl mx-auto my-10 p-6 bg-[#F7EFE5] rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#674188]">{singleJob?.title}</h1>
                    <div className="flex items-center gap-3 mt-4">
                        <Badge className="bg-[#C8A1E0] text-black">{singleJob?.position} Positions</Badge>
                        <Badge className="bg-[#E2BFD9] text-">{singleJob?.jobType}</Badge>
                        <Badge className="bg-[#674188] text-white">₹{singleJob?.salary}</Badge>
                    </div>
                </div>
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg px-6 py-2 font-bold text-white ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#6A38C2] hover:bg-[#5b268a]'}`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
                <h1 className="border-b-2 border-gray-300 pb-3 font-medium text-lg text-[#674188]">Job Description</h1>
                <div className="mt-4 space-y-3">
                    <h2 className="font-bold text-[#674188]">Role: <span className="font-normal text-gray-700">{singleJob?.title}</span></h2>
                    <h2 className="font-bold text-[#674188]">Location: <span className="font-normal text-gray-700">{singleJob?.location}</span></h2>
                    <h2 className="font-bold text-[#674188]">Description: <span className="font-normal text-gray-700">{singleJob?.description}</span></h2>
                    <h2 className="font-bold text-[#674188]">Experience: <span className="font-normal text-gray-700">{singleJob?.experience} yrs</span></h2>
                    <h2 className="font-bold text-[#674188]">Salary: <span className="font-normal text-gray-700">₹{singleJob?.salary}</span></h2>
                    <h2 className="font-bold text-[#674188]">Total Applicants: <span className="font-normal text-gray-700">{singleJob?.applications?.length}</span></h2>
                    <h2 className="font-bold text-[#674188]">Posted Date: <span className="font-normal text-gray-700">{singleJob?.createdAt.split('T')[0]}</span></h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default JobDescription;
