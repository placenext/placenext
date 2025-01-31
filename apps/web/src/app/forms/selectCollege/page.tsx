import SignUpFormCollege from "@/components/own/Form/FacultiyLoginForm";
import LoginForm from "@/components/own/Form/LoginFrom";
import SelectCollegeForm from "@/components/own/Form/SelectCollegeForm";
// import Vector from "../assets/Authentication.svg";

export default function SelectCollegePage() {
  return (
    <div className="flex flex-col mt-28 md:mt-0 md:flex-row w-full min-h-screen fixed">
      <div className="mt-4 md:w-1/2 flex items-center justify-center">
        <SelectCollegeForm />
      </div>
      <div className="hidden md:w-1/2 bg-[#F2F2F2] md:h-auto lg:h-screen md:flex md:items-center md:justify-center">
        {/* <img src={Vector} alt="" /> */}
      </div>
    </div>
  );
}
