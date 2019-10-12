/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

 const withKnow = 800;
 const withoutKnow = 1300;

module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const ka = config[focus];
      let hours;
      //console.log(config[focus]);
      if(knowsProgramming === true){
        hours = withKnow;
      } else {
        hours = withoutKnow;
      }
      //console.log(hours);
      const result = Math.ceil(hours/ka);
      return result;
  };
  