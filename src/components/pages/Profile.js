

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="per_image">
          <img
            src="images/jr.jpg"
            alt='JR'
          />
        </div>
        <div className='per_container'>
          <h1> Personal Information </h1>
          <div className='per_info'>
            <div className='per_info1'>
              <p>Name :</p>
              <p>E-mail: </p>
              <p>Address: </p>
              <p>Experience: </p>
              <p>Field of expertise: </p>
              <p>Phone: </p>
              <p>Designation: </p>
            </div>
            <div className='per_info2'>
              <p>Jeevan Rajopadhyay</p>
              <p>Jhapa, Nepal</p>
              <p>jeevan_rajopadhyay@gmail.com</p>
              <p>2 years</p>
              <p>Newari Cultural Arts</p>
              <p>9844551166</p>
              <p>Contemporary Artists</p>
            </div>
          </div>
        </div>
      </div>
      <div className='profile_about'>
        <h1> About </h1>
        <div className='paragraph'>
          <p>
            Artist Jeevan Rajopadhyay, 61, worked with landscapes for a long time.
            So long that one fine day he decided he was tired of it.
            There came a time when he felt that the mountains and the trees in his paintings
            caused disturbances in his creative renderings. With the realization that people,
            after all, needed change, he started experimenting with other formats of creative
            expression. He soon found happiness in the fact that he could break free from the
            limitations of predetermined shapes and boundaries of landscape paintings.
            I had to transfer my style from one technique to another.
            I never knew if the work I did was correct or not. Eventually,
            I presented these works in an exhibition, and the public totally loved them.
            I felt like I was on the right track. My longing for something new led me to
            the path I am in now -- the correct path, as far as I am concerned.
          </p>
          <p>
            Born in 1904, Shakya began his artistic career in Lhasa,
            Tibet, at the age of 18. Buddhism and the influence of the
            Tibetan Thangka tradition play a central role in his artwork.
            Drawing inspiration from his work, his son, Siddimuni Shakya,
            has contributed to the development of Paubha art in Nepal.
          </p>

          <p>
            Impressed with Shakya’s early work, General Ramraja had taken
            him to Illahabad, Uttar Pradesh. Shakya’s art from his time in
            Illahabad feature a number of different gods. It is also believed
            that he studied under Purnaman.
          </p>

          <p>
            Padmapani Lokeshwor and Buddha Lumbini Vichya are Ananda Muni Shakya’s
            most notable works. He favored painting, but also practiced handicraft
            and metalwork. His final artwork was showcased in the Bhaktapur Khowpa Chwami Pucha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
