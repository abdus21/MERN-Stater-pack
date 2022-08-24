import React, { useContext } from 'react'
import TopBar from '../../components/topBar/TopBar';
import '../Home/Home.scss';
import { FcLike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import AuthContext from '../../context/AuthContext';

const Home = () => {

  const {user} = useContext(AuthContext);

  return (
      <div>
        <TopBar />

        <div className="home-container">
          <div className="home-wraper">

            <div className="home-left">left side</div>

            <div className="home-middle">

              <div className="post-card">
                
                 <div className="post-detals">
                    <div className="post-card-header">
                      <div className="post-card-header-user-detals">
                        <img src={'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.6435-9/133291252_1775437672622699_196678588946591649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSpyLJBER6qINTZ9O7i5Ou8iaOBoUGQvbyJo4GhQZC9pcEe5jFysnr8BvUKIwcagtqOt2EUGFf8TloVfqeKTfS&_nc_ohc=KfQmCfdbhLcAX8iHUDE&_nc_ht=scontent.fdac4-1.fna&oh=00_AT-XRVIHQMvxIt0n0SoEYFtDAXWkOMMaJdQEimm754IyLA&oe=6313CA3D'} alt="" />
                        <div className="detals">
                          <a className='post-user-name' href="#">{user?.name}</a>
                          <a className='post-duration' href="#">7</a>
                        </div>
                      </div>
                      <button className='save-vedio-link'><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></button>
                    </div>

                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Aliquam quam voluptatum nostrum nobis.</p>
                 </div>

                <div className="feature-content">
                  <img src="https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/298067060_2370577069771356_1702251539024645042_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFp4mz0BRYMGFIs5PHh5KrsdKg1RXh3uhB0qDVFeHe6EC_cKiDtP6AhbULNHdhsY9zJVgFOfaqFmJgNdfkgmDry&_nc_ohc=_SnmRI3NTl8AX-i9IiP&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AT-sniKGVi8O2cLYkOO6ZjOduB2wA5S8xRiiF5vMkODRRQ&oe=62F54D92" alt="" />
                </div>

                <div className="like-comment-share">

                  <div className="like">
                    <button><FcLike/></button>
                    <button>16</button>
                  </div>

                  <div className="comment-share">
                    <button>22 Comment</button>
                    <button>26 Share</button>
                  </div>
                  
                </div>

                <div className="post-like-commnet">

                    <div className="post-like">
                      <button><AiOutlineLike size='19px' right='10px'/>Like</button>
                    </div>

                    <div className="post-comment">
                      <button><BiMessage size='19px'/>Comment</button>
                    </div>

                    <div className="post-share">
                    <button><RiShareForwardLine/>Share</button>
                    </div>

                 </div>

              </div>
              <div className="post-card">
                
                 <div className="post-detals">
                    <div className="post-card-header">
                      <div className="post-card-header-user-detals">
                        <img src={'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.6435-9/133291252_1775437672622699_196678588946591649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSpyLJBER6qINTZ9O7i5Ou8iaOBoUGQvbyJo4GhQZC9pcEe5jFysnr8BvUKIwcagtqOt2EUGFf8TloVfqeKTfS&_nc_ohc=KfQmCfdbhLcAX8iHUDE&_nc_ht=scontent.fdac4-1.fna&oh=00_AT-XRVIHQMvxIt0n0SoEYFtDAXWkOMMaJdQEimm754IyLA&oe=6313CA3D'} alt="" />
                        <div className="detals">
                          <a className='post-user-name' href="#">Abdus samad</a>
                          <a className='post-duration' href="#">7</a>
                        </div>
                      </div>
                      <button className='save-vedio-link'><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></button>
                    </div>

                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Aliquam quam voluptatum nostrum nobis.</p>
                 </div>

                <div className="feature-content">
                  <img src="https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/298067060_2370577069771356_1702251539024645042_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFp4mz0BRYMGFIs5PHh5KrsdKg1RXh3uhB0qDVFeHe6EC_cKiDtP6AhbULNHdhsY9zJVgFOfaqFmJgNdfkgmDry&_nc_ohc=_SnmRI3NTl8AX-i9IiP&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AT-sniKGVi8O2cLYkOO6ZjOduB2wA5S8xRiiF5vMkODRRQ&oe=62F54D92" alt="" />
                </div>

                <div className="like-comment-share">

                  <div className="like">
                    <button><FcLike/></button>
                    <button>16</button>
                  </div>

                  <div className="comment-share">
                    <button>22 Comment</button>
                    <button>26 Share</button>
                  </div>
                  
                </div>

                <div className="post-like-commnet">

                    <div className="post-like">
                      <button><AiOutlineLike size='19px' right='10px'/>Like</button>
                    </div>

                    <div className="post-comment">
                      <button><BiMessage size='19px'/>Comment</button>
                    </div>

                    <div className="post-share">
                    <button><RiShareForwardLine/>Share</button>
                    </div>

                 </div>

              </div>
              <div className="post-card">
                
                 <div className="post-detals">
                    <div className="post-card-header">
                      <div className="post-card-header-user-detals">
                        <img src={'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.6435-9/133291252_1775437672622699_196678588946591649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSpyLJBER6qINTZ9O7i5Ou8iaOBoUGQvbyJo4GhQZC9pcEe5jFysnr8BvUKIwcagtqOt2EUGFf8TloVfqeKTfS&_nc_ohc=KfQmCfdbhLcAX8iHUDE&_nc_ht=scontent.fdac4-1.fna&oh=00_AT-XRVIHQMvxIt0n0SoEYFtDAXWkOMMaJdQEimm754IyLA&oe=6313CA3D'} alt="" />
                        <div className="detals">
                          <a className='post-user-name' href="#">Abdus samad</a>
                          <a className='post-duration' href="#">7</a>
                        </div>
                      </div>
                      <button className='save-vedio-link'><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></button>
                    </div>

                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Aliquam quam voluptatum nostrum nobis.</p>
                 </div>

                <div className="feature-content">
                  <img src="https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/298067060_2370577069771356_1702251539024645042_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFp4mz0BRYMGFIs5PHh5KrsdKg1RXh3uhB0qDVFeHe6EC_cKiDtP6AhbULNHdhsY9zJVgFOfaqFmJgNdfkgmDry&_nc_ohc=_SnmRI3NTl8AX-i9IiP&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AT-sniKGVi8O2cLYkOO6ZjOduB2wA5S8xRiiF5vMkODRRQ&oe=62F54D92" alt="" />
                </div>

                <div className="like-comment-share">

                  <div className="like">
                    <button><FcLike/></button>
                    <button>16</button>
                  </div>

                  <div className="comment-share">
                    <button>22 Comment</button>
                    <button>26 Share</button>
                  </div>
                  
                </div>

                <div className="post-like-commnet">

                    <div className="post-like">
                      <button><AiOutlineLike size='19px' right='10px'/>Like</button>
                    </div>

                    <div className="post-comment">
                      <button><BiMessage size='19px'/>Comment</button>
                    </div>

                    <div className="post-share">
                    <button><RiShareForwardLine/>Share</button>
                    </div>

                 </div>

              </div>

            </div>

            <div className="home-right">
              right side 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non perspiciatis omnis totam earum eligendi commodi, impedit suscipit quidem, nesciunt voluptatem aspernatur nobis velit beatae alias deserunt enim, numquam quaerat.</p>
            </div>

          </div>
        </div>
        
      </div>
  );
}

export default Home