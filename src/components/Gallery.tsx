import { motion } from 'motion/react';

const images = [
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/656174604_18096312185052235_6640991224179635268_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=110&ig_cache_key=Mzg1OTM3MzIzMDE0NzE2MzY3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyOTB4MTA1NS5zZHIuQzMifQ%3D%3D&_nc_ohc=ZcdTRqJJRF0Q7kNvwHHXn8t&_nc_oc=AdpCnFEGWWbZuWGa009LrlQKbNI8Rnm_fZokJA1bw_dFeqMKTyMZXeb3J6w3VxYeQmc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=fHeK5CvZ994yIHPHje3SXA&_nc_ss=7a32e&oh=00_AfzHcheWDTseFhyN4B2gJ0_TKrOemoKl6QGIjnU5hqdw-A&oe=69CAD61B",
  "https://s23226.pcdn.co/wp-content/uploads/2020/04/ChrisRiley-SteamCleaning.jpg",
  "https://cdn.shopify.com/s/files/1/1581/3643/files/A_Guide_for_Combatting_Stubborn_Stains_for_Auto_Detailers_4.jpg?v=1737650035",
  "https://static.vecteezy.com/system/resources/thumbnails/003/582/909/small/car-detailing-male-mechanic-holding-car-polishing-machine-auto-industry-car-polishing-and-painting-and-repair-shop-free-photo.jpg",
  "https://cdn.shopify.com/s/files/1/0797/2968/8869/files/ROuxmtrwMpGAtaOSA5bmGOWdH8fcDipRjm9a6MSu.png?v=1708952008&width=1620&height=1080",
  "https://www.superiorcarwashsupply.com/images/640/Blog/luxury%20car%20detailing.png",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            The <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Witness the transformation. Before and after perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl md:rounded-3xl aspect-square"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold tracking-widest uppercase text-sm border border-white/30 px-6 py-3 rounded-full">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
