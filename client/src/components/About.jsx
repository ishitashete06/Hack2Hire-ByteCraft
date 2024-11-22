import React from 'react';
import { Handshake, Users, GraduationCap } from 'lucide-react';
import Navbar from './shared/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center bg-[#F7EFE5]">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-[#9852C1]">
              About <span className="text-[#674188]">FreelanceHub</span>
            </h1>
            <p className="text-sm text-[#674188] mt-1">
              Your gateway to seamless freelancing experiences.
            </p>
          </header>

          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#674188]">
                Hack2Hire Hackathon Project
              </h3>
              <p className="mt-2 text-sm text-[#674188]">
                <strong>FreelanceHub</strong> by <strong>Team Byte Craft </strong> bridges the gap between freelancers and clients with innovation, trust, and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white shadow rounded p-4 text-center">
                <Handshake className="text-[#C8A1E0] h-10 w-10 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-[#674188]">
                  Seamless Connections
                </h3>
                <p className="text-sm text-[#674188]">
                  Find freelancers or projects with Tinder-like matching.
                </p>
              </div>

              <div className="bg-white shadow rounded p-4 text-center">
                <Users className="text-[#C8A1E0] h-10 w-10 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-[#674188]">
                  Team Collaboration
                </h3>
                <p className="text-sm text-[#674188]">
                  Built-in tools for communication and management.
                </p>
              </div>

              <div className="bg-white shadow rounded p-4 text-center">
                <GraduationCap className="text-[#C8A1E0] h-10 w-10 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-[#674188]">
                  Skill Validation
                </h3>
                <p className="text-sm text-[#674188]">
                  Verify freelancer skills with AI-powered assessments.
                </p>
              </div>
            </div>

            <p className="text-sm text-center text-[#674188]">
              <strong>FreelanceHub</strong>: Empowering freelancers and businesses. Join us and redefine freelancing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
