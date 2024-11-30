import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/jobs');
    };

    return (
        <div className="flex w-[40%] shadow-lg border border-[#C8A1E0] pl-3 rounded-full items-center gap-4 mx-auto bg-white mt-5">
            <input
                type="text"
                placeholder="Find your dream jobs"
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none border-none w-full text-[#674188] placeholder-[#C8A1E0]"
            />
            <Button
                onClick={searchJobHandler}
                className="rounded-r-full bg-[#6A38C2] hover:bg-[#674188] text-white"
            >
                <Search className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default HeroSection;
