import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import welcomeBanner from '../assets/freelancer.jpg';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, [user, navigate]);

  return (
    <div className="font-sans bg-[#F7EFE5]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E2BFD9] to-[#F7EFE5] py-16 flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-[#5b268a] leading-snug">
            Welcome to <span className="text-[#6A38C2]">Freelance Hub</span>
          </h2>
          <p className="text-lg text-[#674188] mt-4">
            Discover new opportunities and elevate your career.
          </p>
        </div>
        <img
          src={welcomeBanner}
          alt="Welcome Banner"
          className="rounded-lg mt-6 md:mt-0 md:w-[400px] md:h-[300px] object-cover shadow-lg"
        />
      </section>

      {/* Introduction Section */}
      <section className="text-center py-12 px-6 sm:px-8">
        <span className="mx-auto px-6 py-2 rounded-full bg-[#E2BFD9] text-[#674188] font-medium text-sm md:text-base shadow-md">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#674188] mt-6">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p className="text-[#674188] mt-4 text-base md:text-lg">
          Connect with employers and land jobs effortlessly. <br />
          Explore a wide range of opportunities across industries and skill sets.
        </p>
      </section>

      {/* Explore Categories Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 my-12">
        <h2 className="text-3xl font-bold text-[#5b268a] mb-6 text-center md:text-left">
          Explore Categories
        </h2>
        <CategoryCarousel />
      </section>

      {/* Latest Jobs Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 my-12">
        <h2 className="text-3xl font-bold text-[#5b268a] mb-6 text-center md:text-left">
          Latest Jobs
        </h2>
        <LatestJobs />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
