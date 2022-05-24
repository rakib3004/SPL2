import { Injectable } from '@angular/core';
import {Video} from './video';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videos: Video[]=[

{ videoID:"Y86abolKENE", videoTitle:"2020 Mac Mini UNBOXING and REVIEW!" , videoTopic:"Electronics" },
{ videoID:"C118ADYpEqo", videoTitle:"Diversity of Bodies & Sizes (but mostly crabs): Crash Course Zoology #3" , videoTopic:"Windows" },
{ videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
{ videoID:"OmYVHWJf590", videoTitle:"Merry and gesus explained" , videoTopic:"Electronics" },
{ videoID:"mYhy7eaazIk", videoTitle:"Telescope" , videoTopic:"Medical Science" },
{ videoID:"4x6zzQcMT3w", videoTitle:"Mysterious Nation religion" , videoTopic:"Gun Crime" },
{ videoID:"qf49ZFIIGlk", videoTitle:"Early Computing: Crash" , videoTopic:"Gun Crime" },
{ videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
{ videoID:"veMFCFyOwFI", videoTitle:"The Middle East's cold war, explained" , videoTopic:"IBM" },
{ videoID:"gQGWqA22s5s", videoTitle:"Biomedicine: Crash Course History of Science #34" , videoTopic:"Electronics" },
{ videoID:"mdOJ717PKRc", videoTitle:"How Motorcycles Work - The Basics" , videoTopic:"Gun Crime" },
{ videoID:"l128tW1H5a8", videoTitle:"Urinary System, Part 1: Crash Course A&P #38" , videoTopic:"Hockey" },
{ videoID:"wOclF9eP5uM", videoTitle:"The Age of Exploration: Crash Course European History #4" , videoTopic:"MiddleEast" },
{ videoID:"XjgfnS7qKCI", videoTitle:"Five reasons the Middle East is in crisis - Newsnight" , videoTopic:"Religion" },
{ videoID:"jAhjPd4uNFY", videoTitle:"Genetic Engineering" , videoTopic:"Politics" },
{ videoID:"O5nskjZ_GoI", videoTitle:"Course Computer Science #1" , videoTopic:"Gun Crime" },
{ videoID:"aJKkUFR4eDA", videoTitle:"How & What Animals Eat: Crash Course Zoology #4" , videoTopic:"Politics" },
{ videoID:"lrk4oY7UxpQ", videoTitle:"Introduction: Crash Course U.S. Government and Politics" , videoTopic:"Baseball" },
{ videoID:"mYhy7eaazIk", videoTitle:"Telescope" , videoTopic:"Medical Science" },
{ videoID:"kBpQiJt3MUQ", videoTitle:"Pre-Islamic history of the Middle East" , videoTopic:"Mac" },
{ videoID:"6aMW5mOKxB8", videoTitle:"history of hockey game" , videoTopic:"Gun Crime" },
{ videoID:"tecocKSclwc", videoTitle:"Florence and the Renaissance: Crash Course European History #2" , videoTopic:"Motorcycles" },
{ videoID:"_r9kSA3s2fQ", videoTitle:"Brainy & Brainless Animals: Crash Course Zoology #5" , videoTopic:"Autos" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },
{ videoID:"", videoTitle:"" , videoTopic:"" },


/*m6dCxo7t_aE, The five major world religions - John Bellamy
TpcbfxtdoI8, Islam, the Quran, and the Five Pillars: Crash Course World History #13
ka8csjsmX6I, Islam and Politics: Crash Course World History 216
xlBEEuYIWwY, What Is Hinduism??
JOWFPTzK7D4, The Mecca Mystery: Are Muslims Praying In The Wrong Direction? | Sacred City | Timeline
4aXtAWOxBNA, ASK DR ZAKIR - AN EXCLUSIVE OPEN QUESTION & ANSWER SESSION - 1 | DUBAI | DR ZAKIR NAIK
E6cKvPo4Dv8, John L. Esposito - The Future of Islam
INIG636SnU4, Islam, Judaism, and Christianity - A Conversation
Q_szgVMAC-E, 10 Biggest Differences Between ISLAM & JUDAISM
9nZHT0yStEc, Is it the same God for Muslims, Christians, and Jews?
oylHszMFlgg, What if: America's Four Political Parties | Meet The Press | NBC News
dh3mKgkgWFc, Trudeau: Canada-U.S. Successful Alliance In History Of The Modern World | Meet The Press | NBC News
aBglxa6K8gc, President Trump's Full, Unedited Interview With Meet The Press | NBC News
K8Z9Kqhrh5c, Watch In Full: Trump versus Biden in the first US Presidential election debate
4Ro9H6bmdOg, Digital oppression in Bangladesh | The Listening Post feature
9qRxNYuR2c4, Dictator's Dilemma (Full Episode) | North Korea: Inside the Mind of a Dictator
NIgqhU4lkgo, Putin's Way (full documentary) | FRONTLINE
GC_FFIYz4G0, Financial Secrecy Index U.S. Launch with FACT
Gwr7dpyA7qM, Pelosi's Power (full documentary) | FRONTLINE
5IBa88VkM6g, The Crown Prince of Saudi Arabia (full film) | FRONTLINE
9Hxt3GttF38, 8 INVENTIONS AND TECHNOLOGIES THAT WILL CHANGE OUR WORLD
Q1mZ4ADUEZs, Elon Musk's Future City
SGP6Y0Pnhe4, HOW IT WORKS: The International Space Station
5KygwcZ545U, Shuttle Atlantis STS-132 - Amazing Shuttle Launch Experience
P4boyXQuUIw, Mars Science Laboratory Curiosity Rover Animation
1tOx_Vh5diE, 2021's Breakthroughs in Neuroscience and Other Biology
nlSL7Qg7-Po, Intro to Neuroscience
X3TAROotFfM, Human digestive system - How it works! (Animation)
_VhcZTGv0CU, Immunology in the skin
yqLlgIaz1L0, Have you ever seen an atom?
77FkWW75dX4, Top 5 Simple Electronics projects
pSFkiqtGgjs, simple clap control home-automation.....#clapswitch
d5lEkz3Bomc, The Rise and Stagnation of IBM
LDSiR024aKk, 12 Mac Apps Worth Getting Right Away 2022
ttjPZufCeno, Portable Mac Desk Setup 2022 - the Power of the Apple Ecosystem
Uh9643c2P6k, Introducing Windows 11
TGe3djKdblQ, Windows Insider Webcast - The #BeamMachine
DEYoAkjN_yc, Does Windows 11 Gaming Suck
YqQx75OPRa0, Beginning Graphic Design: Fundamentals
r6g6_CJZI_c, The Best Beginner Motorcycles - Review
*/
  ];

  getVideos() : Video[]{
    return this.videos;
  }

  REST_API: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  // Add
  AddUser(data: Video): Observable<any> {
    let API_URL = `${this.REST_API}/add-video`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/videos`);
  }
  // Get single object
  GetUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/video/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateUser(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-video/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-video/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
