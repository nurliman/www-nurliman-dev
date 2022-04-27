import {} from "solid-js";
import Section from "@/components/Section";
// import styles from "./Blog.module.scss";

export default function BlogSection() {
  return (
    <Section sectionId="blog">
      <div class="page-title">
        <h2>Blog</h2>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="blog-masonry two-columns clearfix">
            <div class="item post-1">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in Design">
                      Design
                    </a>
                  </div>
                  <a href="blog-post-1.html">
                    <img
                      src="img/blog/blog_post_1.jpg"
                      class="size-blog-masonry-image-two-c"
                      alt="Why I Switched to Sketch For UI Design"
                      title=""
                    />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">05 Mar 2020</div>
                  <a href="blog-post-1.html">
                    <h4 class="blog-item-title">Why I Switched to Sketch For UI Design</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-2">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in UI">
                      UI
                    </a>
                  </div>
                  <a href="blog-post-1.html">
                    <img
                      src="img/blog/blog_post_2.jpg"
                      class="size-blog-masonry-image-two-c"
                      alt="Best Practices for Animated Progress Indicators"
                      title=""
                    />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">23 Feb 2020</div>
                  <a href="blog-post-1.html">
                    <h4 class="blog-item-title">Best Practices for Animated Progress Indicators</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-1">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in Design">
                      Design
                    </a>
                  </div>
                  <a href="blog-post-1.html">
                    <img
                      src="img/blog/blog_post_3.jpg"
                      class="size-blog-masonry-image-two-c"
                      alt="Designing the Perfect Feature Comparison Table"
                      title=""
                    />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">06 Feb 2020</div>
                  <a href="blog-post-1.html">
                    <h4 class="blog-item-title">Designing the Perfect Feature Comparison Table</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-2">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in E-Commerce">
                      UI
                    </a>
                  </div>
                  <a href="blog-post-1.html">
                    <img
                      src="img/blog/blog_post_4.jpg"
                      class="size-blog-masonry-image-two-c"
                      alt="An Overview of E-Commerce Platforms"
                      title=""
                    />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">07 Jan 2020</div>
                  <a href="blog-post-1.html">
                    <h4 class="blog-item-title">An Overview of E-Commerce Platforms</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
