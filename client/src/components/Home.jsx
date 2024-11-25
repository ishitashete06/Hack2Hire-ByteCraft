import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import About from './About';
import TaskTracking from './TaskTracking';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import welcomeBanner from '../assets/freelancer.jpg'

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
      <section className="bg-[#E2BFD9] h-72 flex justify-between items-center px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-[#5b268a]">Welcome to Freelance Hub</h2>
          <p className="text-lg text-[#674188] mt-2">
            Discover new opportunities and elevate your career.
          </p>
        </div>
        <img
          src={welcomeBanner}
          alt="Welcome Banner"
          className="rounded-lg w-[350px] h-[250px] object-cover"
        />
      </section>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 my-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Categories</h2>
        <CategoryCarousel />
      </section>
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 my-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Jobs</h2>
        <LatestJobs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
