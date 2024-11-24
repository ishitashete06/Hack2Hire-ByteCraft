import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import axios from 'axios'; 

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const [score, setScore] = useState(null); 
    const [openScoreModal, setOpenScoreModal] = useState(false); 
    const [isPaneOpen, setIsPaneOpen] = useState(false); 
    const { user } = useSelector(store => store.auth);

    const fetchScore = async () => {
        debugger
        try {
            const response = await axios.get(`/api/v1/scores/${user._id}`); 
            setScore(response.data.score); 
            setOpenScoreModal(true); // Open the modal when score is fetched
        } catch (error) {
            console.error("Error fetching score:", error);
        }
    };

    return (
        <div className="relative">
            <Navbar />
            <div
                className="fixed top-4 left-4 z-50 cursor-pointer flex flex-col items-center gap-1"
                onClick={() => setIsPaneOpen(true)}
            >
                <div className="h-1 w-8 bg-black rounded"></div>
                <div className="h-1 w-8 bg-black rounded"></div>
                <div className="h-1 w-8 bg-black rounded"></div>
            </div>

            {isPaneOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 shadow-lg z-40 transition-transform transform translate-x-0">
                    <div className="p-4 flex flex-col items-start">
                        <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage
                                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                                alt="profile"
                            />
                        </Avatar>
                        <h1 className="font-medium text-xl mb-4">{user?.fullname}</h1>
                        <Button className="mb-4 w-full" onClick={fetchScore}>
                            Score
                        </Button>
                        <Button className="mb-4 w-full" onClick={() => alert('Track My Tasks clicked!')}>Track My Tasks</Button>
                        <Button className="mb-4 w-full" onClick={() => alert('Saved Projects clicked!')}>Saved Projects</Button>
                        <Button
                            className="mt-auto w-full bg-red-500 text-white hover:bg-red-600"
                            onClick={() => setIsPaneOpen(false)}
                        >Close</Button>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                                alt="profile"
                            />
                        </Avatar>
                        <div>
                            <h1 className="font-medium text-xl">{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div className="my-5">
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {user?.profile?.skills.length !== 0 ? (
                            user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                        ) : (
                            <span>NA</span>
                        )}
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-md font-bold">Resume</Label>
                    {user?.profile?.resume ? (
                        <a
                            target="blank"
                            href={user?.profile?.resume}
                            className="text-blue-500 w-full hover:underline cursor-pointer"
                        >
                            {user?.profile?.resumeOriginalName}
                        </a>
                    ) : (
                        <span>NA</span>
                    )}
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            {/* Score Details Modal */}
            {openScoreModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-4">Score Details</h2>
                        {score ? (
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="border-b py-2">Field</th>
                                        <th className="border-b py-2">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b py-2">Name</td>
                                        <td className="border-b py-2">{score.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b py-2">Role</td>
                                        <td className="border-b py-2">{score.role}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b py-2">Skill Assessment</td>
                                        <td className="border-b py-2">{score.skillAssessment}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b py-2">Time Taken</td>
                                        <td className="border-b py-2">{score.timeTaken} mins</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b py-2">Score</td>
                                        <td className="border-b py-2">{score.score}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b py-2">Date of Test</td>
                                        <td className="border-b py-2">{new Date(score.dateOfTest).toLocaleDateString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>No score data available.</p>
                        )}
                        <Button onClick={() => setOpenScoreModal(false)} variant="outline" className="mt-4 w-full">
                            Close
                        </Button>
                    </div>
                </div>
            )}

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
