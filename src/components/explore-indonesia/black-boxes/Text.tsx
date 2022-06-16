type TextPropType = {
  num: String;
};

const Text = ({ num }: TextPropType) => {
  return (
    <div className="relative z-10">
      <div className="w-3/4">
        <p className="text-pink-brand text-roboto font-black mb-[14px]">
          {num}
        </p>

        <p className="text-white text-[26.41px] font-bold">Title here</p>

        <p className="text-gray-brand text-[18px]">
          Lorem ipsum dolor sit amet et amet ist ame.
        </p>
      </div>
    </div>
  );
};

export default Text;
