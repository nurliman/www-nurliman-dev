import Section from "components/Section";
import PageTitle from "components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faFileAlt, faVideo, faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "./Portfolio.module.scss";

export default function PortfolioSection() {
  return (
    <Section sectionId="portfolio">
      <PageTitle>Portfolio</PageTitle>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="portfolio-content">
            <ul className="portfolio-filters">
              <li className="active">
                <a className="filter btn btn-sm btn-link" data-group="category_all">
                  All
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="category_detailed">
                  Detailed
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="category_mockups">
                  Mockups
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="category_soundcloud">
                  SoundCloud
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="category_vimeo-videos">
                  Vimeo Videos
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="category_youtube-videos">
                  YouTube Videos
                </a>
              </li>
            </ul>

            <div className="portfolio-grid three-columns">
              <figure
                className="item lbaudio"
                data-groups='["category_all", "category_soundcloud"]'
              >
                <div className="portfolio-item-img">
                  <img src="img/portfolio/1.jpg" alt="SoundCloud Audio" title="" />
                  <a
                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&#038;color=%23ff5500&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true&#038;visual=true"
                    className="lightbox mfp-iframe"
                    title="SoundCloud Audio"
                  ></a>
                </div>

                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faVolumeUp} />
                </div>
                <h4 className="name">SoundCloud Audio</h4>
                <span className="category">SoundCloud</span>
              </figure>

              <figure className="item standard" data-groups='["category_all", "category_detailed"]'>
                <div className="portfolio-item-img">
                  <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                  <a href="portfolio-1.html" className="ajax-page-load"></a>
                </div>

                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faFileAlt} />
                </div>
                <h4 className="name">Detailed Project 2</h4>
                <span className="category">Detailed</span>
              </figure>

              <figure
                className="item lbvideo"
                data-groups='["category_all", "category_vimeo-videos"]'
              >
                <div className="portfolio-item-img">
                  <img src="img/portfolio/3.jpg" alt="Vimeo Video 1" title="" />
                  <a
                    href="https://player.vimeo.com/video/158284739"
                    className="lightbox mfp-iframe"
                    title="Vimeo Video 1"
                  ></a>
                </div>
                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faVideo} />
                </div>
                <h4 className="name">Vimeo Video 1</h4>
                <span className="category">Vimeo Videos</span>
              </figure>

              <figure className="item standard" data-groups='["category_all", "category_detailed"]'>
                <div className="portfolio-item-img">
                  <img src="img/portfolio/4.jpg" alt="Media Project 1" title="" />
                  <a href="portfolio-1.html" className="ajax-page-load"></a>
                </div>
                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faFileAlt} />
                </div>
                <h4 className="name">Detailed Project 1</h4>
                <span className="category">Detailed</span>
              </figure>

              <figure className="item lbimage" data-groups='["category_all", "category_mockups"]'>
                <div className="portfolio-item-img">
                  <img src="img/portfolio/5.jpg" alt="Mockup Design 1" title="" />
                  <a
                    className="lightbox"
                    title="Mockup Design 1"
                    href="img/portfolio/full/5.jpg"
                  ></a>
                </div>

                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faImage} />
                </div>
                <h4 className="name">Mockup Design 1</h4>
                <span className="category">Mockups</span>
              </figure>

              <figure
                className="item lbvideo"
                data-groups='["category_all", "category_youtube-videos"]'
              >
                <div className="portfolio-item-img">
                  <img src="img/portfolio/6.jpg" alt="YouTube Video 1" title="" />
                  <a
                    href="https://www.youtube.com/embed/bg0gv2YpIok"
                    className="lightbox mfp-iframe"
                    title="YouTube Video 1"
                  ></a>
                </div>

                <div className={styles.icon}>
                  <FontAwesomeIcon height={18} width={18} icon={faVideo} />
                </div>
                <h4 className="name">YouTube Video 1</h4>
                <span className="category">YouTube Videos</span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
