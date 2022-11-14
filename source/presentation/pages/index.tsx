import { Fragment, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/presentation/components/Carousel";
import { CarouselSlide } from "@/presentation/components/CarouselSlide";
import { categories } from "@/presentation/data/movies";
import { LoadingVideo } from "@/presentation/components/LoadingVideo";
import { Header } from "@/presentation/components/Header";

export default function Home(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [mounted]);

  if (!mounted) return <LoadingVideo />;

  return (
    <Fragment>
      <Header />
      {loading && <LoadingVideo />}
      <div className="overflow-hidden min-h-screen px-4 flex flex-col-reverse justify-end">
        {categories.sort((a,b) => b.order - a.order).map((category, index) => (
          <div className="mt-20" style={{zIndex: (categories.length -1) - ((index  + 11) * -1)}}>
            <h2 className="mb-6 text-xl">{category.name}</h2>
            <Carousel>
              {category.list.map((movie) => (
                <div key={movie.id}>
                  <SwiperSlide className="overflow-visible">
                    <CarouselSlide
                      key={movie.id}
                      id={movie.id}
                      categories={movie.categories}
                      time={movie.time}
                      imageSource={movie.imageSource}
                      title={movie.title}
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
