import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp} from "react-icons/ai";
import { FaLine } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer" className=" bg-slate-200">
      <section>
        <div className='pb-5 lg:flex'>
          <div className='m-5 text-sm basis-1/3 lg:mx-20'>
            <h1 className='font-bold'>Techno Entrepreneur Club</h1>
            {/* <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dicta rem perferendis quia assumenda qui. Explicabo sint eum molestias recusandae.</h2> */}
          </div>

          <div className='flex flex-col m-5 text-sm basis-1/3 lg:mx-20'>
            <h1 className='font-bold'>Get latest and most updated information. Follow our social media!</h1>
            <div className='flex items-center my-2'>
              <AiFillInstagram size="2em" />
              <div className='ml-3'>
                <a href="https://www.instagram.com/tec.ohu/">@tec.ohu</a ><br/>
                <a href="https://www.instagram.com/tec.itb/">@tec.itb</a >
              </div>
            </div>

            {/* <div className='flex items-center my-2'>
                <AiOutlineTwitter size="2em" />
                <div className='ml-3'>
                  <h2>@tex.ohu</h2>
                  <h2>@tec.itb</h2>
                </div>
            </div> */}


          </div>
          <div className='flex flex-col m-5 text-sm basis-1/3 lg:mx-20'>
            <h1 className='font-bold'>For any questions and detailed information, please don’t hesitate to contact
            </h1>
            <div className='flex items-center mt-2'>
              <FaLine size="2em" />
              <div className='ml-3'>
                <h2>nafisha_44</h2>
              </div>
            </div>
            <div className='flex items-center mt-2'>
              <FaLine size="2em" />
              <div className='ml-3'>
                <h2>khalshft</h2>
              </div>
            </div>
{/* 
            <div className='flex items-center mt-2'>
                <AiOutlineWhatsApp size="2em" />
                <div className='ml-3'>
                  <h2>081234568910</h2>
                  <h2>087878123456</h2>
                </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;