import React from 'react';
import { Handshake, Users, GraduationCap } from 'lucide-react';
import Navbar from './shared/Navbar';

const About = () => {
  return (
    <div>
        <Navbar />
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 bg-[#F7EFE5]">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-[#9852C1]"> 
            About <span className="text-[#674188]">FreelanceHub</span>
          </h1>
          <p className="text-lg text-[#674188] mt-2">
            Your gateway to seamless freelancing experiences.
          </p>
        </header>

        <section>
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-[#674188]">
              Hack2Hire Hackathon Project
            </h3>
            <p className="mt-4 text-lg text-[#674188] max-w-2xl mx-auto">
              <strong>FreelanceHub</strong> is a platform created by{' '}
              <strong>Team Byte Craft</strong> for{' '}
              <strong>Hack2Hire Hackathon by SkillMingle</strong> to bridge the gap
              between freelancers and clients with a focus on innovation, trust,
              and efficiency.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#674188] text-center mb-12">
              Why Choose FreelanceHub?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white shadow-xl rounded-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <Handshake className="text-[#C8A1E0] h-16 w-16 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#674188] mb-2">
                  Seamless Connections
                </h3>
                <p className="text-[#674188]">
                  Find the perfect freelancer or project with our Tinder-like
                  matching mechanism.
                </p>
              </div>

              <div className="bg-white shadow-xl rounded-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <Users className="text-[#C8A1E0] h-16 w-16 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#674188] mb-2">
                  Team Collaboration
                </h3>
                <p className="text-[#674188]">
                  Collaborate effortlessly with built-in tools for communication
                  and management.
                </p>
              </div>

              <div className="bg-white shadow-xl rounded-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <GraduationCap className="text-[#C8A1E0] h-16 w-16 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#674188] mb-2">
                  Skill Validation
                </h3>
                <p className="text-[#674188]">
                  Verify freelancer skills with AI-powered proctored assessments.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#674188]">
              At <strong>FreelanceHub</strong>, we are committed to empowering
              freelancers and businesses alike. Join us and redefine the future of
              freelancing.
            </p>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default About;