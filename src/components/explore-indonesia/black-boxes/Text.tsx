type TextPropType = {
  num: String;
};

const Text = ({ num }: TextPropType) => {
  return (
    <div className="w-[210.11px] relative z-10">
      <p className="text-pink-brand text-roboto font-black mb-[14px]">{num}</p>

      <p className="text-white text-[26.41px] font-bold">Title here</p>

      <p className="text-gray-brand text-[18px]">
        Lorem ipsum dolor sit amet et amet ist ame.
      </p>
    </div>
  );
};

export default Text;
