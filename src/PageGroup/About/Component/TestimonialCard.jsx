import { Star } from "react-feather";

const TestimonialCard = ({ text, name, batch }) => {
  return (
    <div className="col-span-1 flex max-w-[22rem] h-fit flex-col gap-y-4 rounded-md bg-green-light p-2 shadow sm:p-4 md:p-6">
      <div className="relative flex w-full items-center justify-center">
        <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-gray-700" />
        <img
          id="Government"
          alt="Prof. Bashir Alam"
          src="https://placebeard.it/200x200"
          className="h-24 w-24 rounded-full border-[3px] border-green-yellow object-cover object-top"
        />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-gray-700" />
        <div className="absolute right-0 top-0 flex gap-x-1 text-green-deep">
          {[0, 1, 2, 3].map((i) => (
            <Star key={i} className="h-4 w-4 fill-green-deep" />
          ))}
        </div>
      </div>
      <div className="w-full text-sm">{text}</div>
      <div className="w-full text-center font-semibold text-green-deep">
        {name}
      </div>
      <div className="w-full text-center text-xs font-semibold text-gray-800">
        {batch}
      </div>
    </div>
  );
};

export default TestimonialCard;
