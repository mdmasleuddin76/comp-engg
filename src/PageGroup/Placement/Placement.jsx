import { useState } from "react";
import "./index.css";
import Spc from "./Component/Spc";
import Coordinator from "./Component/Coordinator";
import {spcs} from '../../../data/placement';

function Placement() {
  return (
    <section>
      <div>
        <h1 className=" heading h-[100px] w-full bg-[color:var(--green-deep)] text-xl text-white">
          Placements
        </h1>
      </div>
      <div className="subHeading">
        <div>
          <h3 className="max-w-fit bg-[color:var(--dark-black)] px-6 py-4 text-white">
            Placement Details for 2022 Batch (Btech)
          </h3>
        </div>
        <div>
          <h3 className="max-w-fit bg-[color:var(--dark-black)] px-6 py-4 text-white">
            Placement Registration for 2024 Batch (Btech/Mtech)
          </h3>
        </div>
        <div>
          <h3 className="max-w-fit bg-[color:var(--dark-black)] px-6 py-4 text-white">
            Placement Details for Mtech Computer Engg. student
          </h3>
        </div>
      </div>

      <div>
        <div className="group relative col-span-1 m-10 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow">
          <div className="flex w-full flex-col gap-y-3 bg-green-light px-5 py-5 pl-6 text-sm sm:px-8 sm:pl-8 md:px-12">
            <p className="font-normal italic text-black">
              Campus Placement is the facility given by the University Placement
              Cell to the Department of Computer Engineering to provide jobs for
              students pursuing B.Tech. and M.Tech. Computer Engineering
              programs. In this facility, the national and multinational
              companies visit the college to select students depending on their
              ability to work, capability, focus, and aim. The major objective
              of campus placement is to provide job opportunities for students
              before they complete their education. There is a pre-placement
              talk for the students which includes a presentation about the
              company. The presentation includes information like selection
              procedure, company’s milestones, organizational achievements,
              candidate scope of improvement within the organization if
              selected, salary, employment benefits. Different companies that
              visit the campus for placements have certain procedures that is
              set by companies for selection of appropriate candidates. These
              procedures may be different from company to company.
            </p>
          </div>
          <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
        </div>
      </div>

      <section>
        <div
          className="group relative col-span-1 ml-6 flex h-12 overflow-hidden rounded-md text-green-800 sm:ml-8"
          style={{ marginTop: "30px" }}
        >
          <h3
            className="font-bold text-black"
            style={{ fontSize: "25px", marginLeft: "10px" }}
          >
            Placement Records
          </h3>
          <div className="absolute bottom-1 h-[5px] w-[60px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-2" />
        </div>
      </section>

      {/* Coordinator section  */}
      <Coordinator />

      {/* Student Placement Coordinators */}
      <section className="m-10">
        <h2 className="mt-20 text-center text-[25px] font-medium">
          Student Placement Coordinators
        </h2>

        <div className="flex flex-wrap items-center justify-evenly">
        {spcs.map((spc, i) => (
          <Spc spc={spc} key={i}/>
        ))}
        </div>

      </section>
    </section>
  );
}
export default Placement;
