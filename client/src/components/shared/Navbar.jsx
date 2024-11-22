import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="bg-[#674188] shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-12 px-3 sm:px-5 lg:px-6">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold text-white cursor-pointer">
              Freelance<span className="text-[#F83002]">Hub</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4 text-white">
            {user && user.role === 'recruiter' ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skill-development"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Skill Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/assessment"
                    className="hover:bg-[#6306b9] rounded-md px-2 py-1 transition text-base font-medium"
                  >
                    Skill Assessment
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="bg-[#F7EFE5] text-black hover:bg-[#E2BFD9] text-sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#F7EFE5] text-black hover:bg-[#E2BFD9] text-sm">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-8 h-8">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72 bg-white shadow-lg rounded-md p-3">
                <div>
                  <div className="flex gap-2 items-center">
                    <Avatar className="cursor-pointer w-8 h-8">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{user?.fullname}</h4>
                      <p className="text-xs text-gray-600">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 gap-1 text-gray-700">
                    {user && user.role === 'student' && (
                      <div className="flex items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="text-red-500 hover:text-red-700"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
