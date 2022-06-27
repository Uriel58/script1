// source file: lib/random.s1
import '../sys/s1.js'

function rUnif(min=0,max=1)                        // (1) 
{                                                  // (1) 
  return (min+random((max-min)));                  // (2) 
}                                                  // (1) 
function rInt(min,max)                             // (5) 
{                                                  // (5) 
  return floor(runif(min,max));                    // (6) 
}                                                  // (5) 
function rChoose(a)                                // (9) 
{                                                  // (9) 
  return a[rInt(0,len(a))];                        // (10) 
}                                                  // (9) 
function sample(x,prob)                            // (13) 
{                                                  // (13) 
  let xlen=len(x);                                 // (14) 
  let p=random();                                  // (15) 
  let psum=0;                                      // (16) 
  for (let pi of range(xlen))                      // (17) 
  {                                                // (17) 
    psum=(psum+prob[pi]);                          // (18) 
    if (psum>=p) break;                            // (19) 
                                                   // (19) 
  };                                               // (17) 
                                                   // (17) 
  return pi;                                       // (21) 
}                                                  // (13) 

