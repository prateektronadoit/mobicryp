const learningVideos = [
  {
    title: 'How To Signup in Mobicryp APP',
    video: 'https://www.youtube.com/embed/xEk071Uw27Y',
    summary: 'In this video, you will get to know how you will connect with Mobicryp.',
    points: [
      'It\'s mandatory to have a referral id for signing up.',
      'You have to fill details Like Referral ID, Team Side, Name, country, Number, password.',
      'OTP is required to while signing up',
      'Now you are ready to sign in on Mobicryp Dashboard',
    ],
    group: 'mobile',
  },
  {
    title: 'How To Sign in Mobicryp App',
    video: 'https://www.youtube.com/embed/_PmfMi7Spd8',
    summary: 'In this video, you will get to know how you can login in Mobicryp system',
    points: [
      'You need your username & password.',
      'You have to fill details Like Referral ID, Team Side, Name, country, Number, password.',
      'OTP is required to while signing in',
      'Now you are ready to sign in on Mobicryp Dashboard',
    ],
    group: 'mobile',
  },
  {
    title: 'How To Buy Hub on Mobicryp App',
    video: 'https://www.youtube.com/embed/VW1oEG5nfoc',
    summary: 'In this video, you will get to know how you can buy hub in Mobicryp App',
    points: [
      'You need to login in Mobicryp App',
      'You have to option to buy hub here TRDO wallet and USDT wallet',
      'Select the Hub package you want to buy',
    ],
    group: 'mobile',
  },
  {
    title: 'How To Active Account in Mobicryp App',
    video: 'https://www.youtube.com/embed/cIaaXVmoafY',
    summary: 'In this video, you will get to know how you can activate your Mobicryp account',
    points: [
      'You need to first buy hub package',
      'To activate your account the top-up amount should be equal to or greater than the hub you buy.',
      'You need to choose minting mode while toping up Self mode or Auto mode',
    ],
    group: 'mobile',
  },
  {
    title: 'How to Withdraw Fund In Mobicryp APP',
    video: 'https://www.youtube.com/embed/t4OFLaSXfRA',
    summary: 'In this video, you will get the knowledge to withdraw funds in Mobicryp App.',
    points: [
      'Withdraw funds form minting or income wallet',
      'Get your fund in TRDO or TRC 20 (USDT)',
      'You will be required to enter OTP for placing any kind of withdrawal, this OTP will be sent to the registered email of the ID',
      'Your withdrawal request completed within next 24 hr.',
    ],
    group: 'mobile',
  },
  {
    title: 'How To Signup on Mobicryp Website',
    video: 'https://www.youtube.com/embed/M57HzbPyMSY',
    summary: 'In this video, you will get to know how you will connect with Mobicryp system.',
    points: [
      'It\'s mandatory to have a referral id for signing up.',
      'You have filled details Like Referral ID, Team Side, Name, country, Number, password.',
      'OTP is required to while signing up',
      'Now you are ready to sign in on Mobicryp Dashboard',
    ],
    group: 'web',
  },
  {
    title: 'How To Sign in on Mobicryp Website',
    video: 'https://www.youtube.com/embed/n42ybsrdXYQ',
    summary: 'In this video, you will get to know how you can login in Mobicryp system',
    points: [
      'You need your username & password.',
      'You have filled details Like Referral ID, Team Side, Name, country, Number, password.',
      'OTP is required to while signing in',
      'Now you are ready to sign in on Mobicryp Dashboard',
    ],
    group: 'web',
  },
]

const Learning = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">Mobicryp Business Presentation</h1>
        <div className="flex justify-center mb-12">
          <a href="/MobicrypBusinessPresentation.pdf" download className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition">Download Mobicryp Business Presentation</a>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Mobicryp How To Videos</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">For Mobile User</h3>
          <div className="flex flex-col gap-10">
            {learningVideos.filter(v => v.group === 'mobile').map((v) => (
              <div key={v.title} className="flex flex-col md:flex-row bg-[#162447] rounded-2xl shadow-lg overflow-hidden">
                <div className="md:w-2/5 w-full aspect-video bg-black flex items-center justify-center">
                  <iframe
                    src={v.video}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-60 md:h-full"
                  />
                </div>
                <div className="md:w-3/5 w-full p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-2">{v.title}</h2>
                  <h3 className="text-base font-medium mb-2 text-blue-200">{v.summary}</h3>
                  <ul className="list-disc pl-5 text-gray-200 space-y-1">
                    {v.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">For Web User</h3>
          <div className="flex flex-col gap-10">
            {learningVideos.filter(v => v.group === 'web').map((v) => (
              <div key={v.title} className="flex flex-col md:flex-row bg-[#162447] rounded-2xl shadow-lg overflow-hidden">
                <div className="md:w-2/5 w-full aspect-video bg-black flex items-center justify-center">
                  <iframe
                    src={v.video}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-60 md:h-full"
                  />
                </div>
                <div className="md:w-3/5 w-full p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-2">{v.title}</h2>
                  <h3 className="text-base font-medium mb-2 text-blue-200">{v.summary}</h3>
                  <ul className="list-disc pl-5 text-gray-200 space-y-1">
                    {v.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="https://www.youtube.com/@mobicryp/videos" className="text-blue-400 underline hover:text-blue-200 font-semibold" target="_blank" rel="noopener noreferrer">Click here for more videos</a>
        </div>
      </div>
    </div>
  )
}

export default Learning 