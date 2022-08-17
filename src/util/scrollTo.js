// TODO: get this working
const scrollTo = (id) => {
  if (typeof window !== 'undefined') {
    let e = document.getElementById(id);
    if (e !== null) {
      e.scrollTo({ behavior: 'smooth' });
    }
  }
};

export default scrollTo;
