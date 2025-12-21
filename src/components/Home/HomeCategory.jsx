 
import Image from 'next/image';
import Link from 'next/link';

// Images from public folder
const categories = [
    { img: '/images/gdIcon.png', title: 'Art & Design', subtitle: 'Platform for Creativity' },
    { img: '/images/webicon.png', title: 'Programming', subtitle: 'Code with Confidence' },
    { img: '/images/icon5.png', title: 'Digital Marketing', subtitle: 'The Art of Influence' },
    { img: '/images/icon6 (2).png', title: 'Media & Film', subtitle: 'Storytelling in Motion' },
    { img: '/images/icon3.png', title: 'Networking & Server', subtitle: 'Protector of the IT Industry' },
    { img: '/images/icon4.png', title: 'Management', subtitle: 'Leading with Strategy' },
    { img: '/images/icon3.png', title: 'Database', subtitle: 'Structure, Store, Strategize' },
    { img: '/images/gdIcon.png', title: 'Diploma', subtitle: 'Skill Up, Stand Out' }
];

const HomeCategory = () => {
    return (
        <div className='bg-white max-sm:pt-76'>
            <div className='grid cursor-pointer grid-cols-2 md:grid-cols-2 lg:grid-cols-4 container mx-auto justify-center items-center gap-x-5 gap-y-3 py-6 md:py-10'>
                {categories.map((cat, index) => (
                    <Link 
                        key={index} 
                        href={`/courses?category=${encodeURIComponent(cat.title)}`} 
                        className='border border-gray-200 p-2 md:pl-6 md:pr-16 py-4 rounded-md flex justify-center items-end gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]'
                    >
                        <div>
                            <Image 
                                src={cat.img} 
                                alt={cat.title} 
                                width={56} 
                                height={56} 
                                className='transform' 
                            />
                        </div>
                        <div>
                            <h3 className='font-semibold crd outfit-semibold text-xs lg:text-[16px]'>{cat.title}</h3>
                            <p className='work text-xs lg:text-[16px] dark:text-black text-nowrap'>{cat.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeCategory;
