import { useRouter } from "next/router";
import { FC } from "react";
import { Avatar } from "./Avatar";

const users = [
  {
    name: "Júlia",
    avatar:
      "https://preview.redd.it/kzs8eema0uw81.jpg?auto=webp&s=3b8e801b055ff377c131c24e7234352fa32ec41d",
  },
  {
    name: "Leonardo",
    avatar:
      "https://i.pinimg.com/736x/70/40/f2/7040f29fa5b432abdb77788c0f315665.jpg",
  },
];
export const ChoiceProfile: FC = (): JSX.Element => {
  const { push } = useRouter();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen h-full">
      <h1 className="text-6xl">Quem está na apresentação?</h1>
      <div className="grid grid-flow-col gap-7 mt-7 mb-20">
        {users.map((user) => (
          <div key={user.name} className="flex flex-col items-center">
            <button onClick={() => push("/")}>
              <Avatar source={user.avatar} />
              <p className="text-gray text-2xl mt-3">{user.name}</p>
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => push("/")}
        className="text-2xl text-gray border border-gray py-2 px-4 hover:text-white hover:border-white transition-colors"
      >
        Começar a apresentação
      </button>
    </section>
  );
};
