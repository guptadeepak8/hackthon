

interface Props {
    icon:string;
    title:string;
    desc:string;
}

export default function ParticipationCard({icon,title,desc}:Props) {
  return (
    <div className="w-[542px] h-[276px] rounded-2xl bg-[#F8F9FD]">
        <div className="mt-14 ml-8 ">
          <div className="flex flex-col gap-4">

          <img src={icon} alt={`${icon}Icon`} className="w-12 h-12"/>
          <h3 className="font-semibold text-2xl ">{title}</h3>
          <span className="font-medium text-base text-[#64607D]">{desc}</span>
          </div>
        </div>
    </div>
  )
}
