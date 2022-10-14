import React,{useState} from 'react'
import Nav from '../../Components/Navbar2/index'
import './reviews.css'
import logoImage from '../../images/logo.png'
import Footer from '../../Components/Footer'
import Carousel from '../../pages/Reviews/reviews-carousel/reviews-carousel'

function Reviews() {
    const [reviewsModel, addReviewModel] = useState(false);
    // update the state
    function toggleReview() {
      if (reviewsModel === true) {
        addReviewModel(false);
      } else {
        addReviewModel(true);
      }
    }
  return (
    <div className=''>
      <Nav />

      <section className='reviews'>
        <div className='my-site'>
          <div className='my-site-left'>
            <div className='my-site-left-image'>
              <img src={logoImage} alt="Asd" className='my-second-logo'></img>
            </div>
            <div className='my-site-left-context'>
              <h1 className='my-site-left-context-heading'>My portgolio Reviews</h1>
              <p className='my-site-left-context-paragraph'>Here goes my portfolio descriptions</p>
              <div className='review-stars'>
                <p>50 reviews</p>
              </div>
            </div>
          </div> 
          <div className='review-stars-context' onClick={toggleReview}>Add Review</div>
        </div>
 
        <div>
          {reviewsModel ? (
          <div className='model'>
            <div className='model-content' onClick={toggleReview}><i className='fas fa-times'></i> Close</div>
              <div className='level level-field '>
                <div className='level-item is-flex-wrap-wrap'>
                  <div className='level-item mx-1 '>
                    <input
                      className='input level-item level-input input-border'
                      placeholder='First Name'
                      id='name'
                    ></input>
                  </div>
                  <div className='level-item is-flex-wrap-wrap'>
                    <input
                      className='input level-item  level-input input-border'
                      placeholder='Last Name'
                      type='name'
                    ></input>
                  </div>
                </div>
              </div>
              <div className='field my-4  px-6 here'>
                <div className='control'>
                  <textarea
                    className='textarea is-small level-field input-border'
                    id='text'
                    placeholder="says"
                  ></textarea>
                </div>
              </div>
              <div className='model-context'>
                <p>Please choose a between 1 to 5 stars. 1 is the lowest and 5 is the highest</p>
                <div className='stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>

                <div className='submit'>Submit</div>
              </div>
            </div>
          ) : (
            null)}
        </div>
        <div className='reviews-content'>
          <div className='rating-status'>
            <div className='status'>
              <ul className='ul-status'>
                <li className='percente'>71%</li>
                <li className='reviews-count'>Reviews</li>
                <li className='li-stars'>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                </li>
              </ul>

              <ul className='ul-status'>
                <li className='percente'>52%</li>
                <li className='reviews-count'>Reviews</li>
                <li className='li-stars'> 
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                </li>
              </ul>

              <ul className='ul-status'>
                <li className='percente'>35%</li>
                <li className='reviews-count'>Reviews</li>
                <li className='li-stars'>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                </li>
              </ul>

              <ul className='ul-status'>
                <li className='percente'>11%</li>
                <li className='reviews-count'>Reviews</li>
                <li className='li-stars'>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                </li>            
              </ul>

              <ul className='ul-status'>
                <li className='percente'>03%</li>
                <li className='reviews-count'>Reviews</li>
                <li className='li-stars'>
                  <i class="fa-solid fa-star star"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className='all-reviews'> 
            <Carousel /> 
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Reviews