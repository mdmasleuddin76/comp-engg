const Spc = (props) => {
    const { name, year, email, img, github, linkedin, whatsapp } = props.spc; 
    return (
        <div>
        <div className="circle"></div>
        <div className="mt-10 w-[488px] rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md">
          <div className="flex items-center md:items-start">
            <div className="circle-container w-[60px] h-[60px]">
              <img src={img} alt="" />
            </div>
            <div className="mx-4 h-[130px] w-[4px] rounded-md bg-[color:var(--green-deep)]"></div>
            <div>
              <h3 className="mb-2 text-[20px] font-medium">
               {name}
              </h3>
              <p className="mb-1.5 text-lg font-medium text-[color:var(--green-deep)]">
               {year}
              </p>
              <p className="mb-1.5 text-lg font-medium text-[color:var(--green-deep)]">
               {email}
              </p>
              <div className="mt-5 flex w-24 justify-between">
                <a href={github} target="_blank">
                <i className="fa-brands fa-github fa-lg cursor-pointer"></i></a>
                <a href={linkedin} target="_blank">
                <i className="fa-brands fa-linkedin fa-lg cursor-pointer"></i></a>
                <a href={whatsapp} target="_blank">
                <i className="fa-brands fa-square-whatsapp fa-lg cursor-pointer"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Spc;