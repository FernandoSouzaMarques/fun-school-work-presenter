import { FC, Fragment } from "react";
import { categories } from "@/presentation/data/movies";
import { Player } from "@/presentation/components/Player";
import { useRouter } from "next/router";
import { LoadingVideo } from "@/presentation/components/LoadingVideo";

const Browse: FC = (): JSX.Element => {
  const { query: { id }} = useRouter();

  const media = categories.map((category) => category.list).flat().find(({ id: movieId }) => id === movieId);
  return (
    <Fragment>
    {id && media ? <Player /> : <LoadingVideo />}
    </Fragment>
  );
};

export default Browse;
