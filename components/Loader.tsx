import Image from "next/image"

interface Props {
    text: string
}

const Loader: React.FC<Props> = ({ text }) => {
    return (
        <div className="flex items-center justify-center gap-x-2 w-full">
            <div className="animate-spin w-6 h-6 relative">
                <Image
                    src="/Tee-Logo.jpg"
                    alt="logo"
                    fill
                    priority
                    className="rounded-full"
                />
            </div>
            <span className="font-normal">{text}...</span>
        </div>
    )
}

export default Loader