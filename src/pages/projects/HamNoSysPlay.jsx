import { Helmet } from 'react-helmet'
import { FaSearch } from 'react-icons/fa'

const HamNoSysPlay = () => {
  return (
    <div className="detail relative w-full min-h-[800px]">
          <div className="absolute left-4 top-4 flex items-center justify-center mx-auto">
            <Helmet>
              <link
                rel="stylesheet"
                href={`${window.location.origin}/avatar-assets/static/css/style.css`}
              />
              <script
                src={`${window.location.origin}/avatar-assets/static/js/allcsa.js`}
              />
              <script
                src={`${window.location.origin}/avatar-assets/static/js/script.js`}
              />
              <script
                src={`${window.location.origin}/avatar-assets/static/js/initialize.js`}
              />
            </Helmet>
            {/* <!-- Avatar Change dropdown --> */}
            <div className="CWASAAvMenu av0 text-capitalize"></div>
          </div>
          {/* <!-- Avatar --> */}
          <div className="shadow-sm w-1/2 h-[600px]">
            <div className="card text-center">
              {/* <h6 id="loading" className="card-header">
                            </h6> */}
              {/* <!-- Animation Box --> */}
              <div className="bg-[#F7F7F7] rounded-md">
                <div className="card-body">
                  <div className="CWASAAvatar av0"></div>
                </div>
                {/* <!-- Description --> */}
                <div className="card-footer bg-transparent">
                  {/* <!-- Buttons --> */}
                  <button
                    type="button"
                    id="animate"
                    className="btn btn-sm btn-info bttnPlaySiGMLText av0"
                    hidden
                  >
                    <i className="fas fa-hand-sparkles"></i> Play
                  </button>
                  {/* &emsp; */}
                  {/* <div className="CWASAAvMenu av0 text-capitalize"></div> */}
                  <textarea
                    id="sigml"
                    // rows="10"
                    className="txtaSiGMLText av0"
                    hidden
                  ></textarea>
                  <div className="mx-4 md:mx-auto gap-x-2 flex rounded-md shadow md:shadow-md my-0 py-3 px-3 md:py-4 md:px-5 items-center bg-white">
                    <div className="grow">
                      <input
                        id="input-bangla-sentence"
                        type="text"
                        className="input-control lg:input-lg shadow-sm w-full h-full rounded-md bg-slate-100"
                        placeholder="এখানে লিখুন..."
                        // onChange={(e) =>
                        //   setBanglaSentence(e.target.value.trim())
                        // }
                      />
                    </div>
                    <button
                      type="button"
                      className="btn lg:btn-lg btn-primary hover:btn-primary-dark text-gray-500 rounded-md max-lg:w-[36px] max-lg:btn-icon shadow-md leading-normal access-ring"
                    //   onClick={() => onTranslateBtnClick(banglaSentence)}
                    >
                      <FaSearch className="w-4 h-4 lg:h-6 lg:w-6 text-gray-500 inline-flex" />
                      <span className="hidden lg:inline lg:ml-2">{'রূপান্তর করুন'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HamNoSysPlay