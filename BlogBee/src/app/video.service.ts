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
{ videoID:"qf49ZFIIGlk", videoTitle:"Early Computing: Crash Course" , videoTopic:"Gun Crime" },
{ videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
{ videoID:"veMFCFyOwFI", videoTitle:"The Middle East's cold war, explained" , videoTopic:"IBM" },
{ videoID:"gQGWqA22s5s", videoTitle:"Biomedicine: Crash Course History of Science #34" , videoTopic:"Electronics" },
{ videoID:"mdOJ717PKRc", videoTitle:"How Motorcycles Work - The Basics" , videoTopic:"Gun Crime" },
{ videoID:"l128tW1H5a8", videoTitle:"Urinary System, Part 1: Crash Course A&P #38" , videoTopic:"Hockey" },
{ videoID:"wOclF9eP5uM", videoTitle:"The Age of Exploration: Crash Course European History #4" , videoTopic:"MiddleEast" },
{ videoID:"XjgfnS7qKCI", videoTitle:"Five reasons the Middle East is in crisis - Newsnight" , videoTopic:"Religion" },
{ videoID:"jAhjPd4uNFY", videoTitle:"Genetic Engineering Crash Course" , videoTopic:"Politics" },
{ videoID:"O5nskjZ_GoI", videoTitle:"Course Computer Science #1" , videoTopic:"Gun Crime" },
{ videoID:"aJKkUFR4eDA", videoTitle:"How & What Animals Eat: Crash Course Zoology #4" , videoTopic:"Politics" },
{ videoID:"lrk4oY7UxpQ", videoTitle:"Introduction: Crash Course U.S. Government and Politics" , videoTopic:"Baseball" },
{ videoID:"GPOv72Awo68", videoTitle:"How it Happened - The 2008 Financial Crisis: Crash Course Economics #12" , videoTopic:"Medical Science" },
{ videoID:"kBpQiJt3MUQ", videoTitle:"Pre-Islamic history of the Middle East" , videoTopic:"Mac" },
{ videoID:"6aMW5mOKxB8", videoTitle:"history of hockey game" , videoTopic:"Gun Crime" },
{ videoID:"tecocKSclwc", videoTitle:"Florence and the Renaissance: Crash Course European History #2" , videoTopic:"Motorcycles" },
{ videoID:"_r9kSA3s2fQ", videoTitle:"Brainy & Brainless Animals: Crash Course Zoology #5" , videoTopic:"Autos" },


{ videoID:"m6dCxo7t_aE", videoTitle:"The five major world religions - John Bellamy" , videoTopic:"Science" }, 
{ videoID:"TpcbfxtdoI8", videoTitle:"Islam, the Quran, and the Five Pillars: Crash Course World History #13" , videoTopic:"Science" }, 
{ videoID:"xlBEEuYIWwY", videoTitle:"What Is Hinduism??" , videoTopic:"Science" }, 
{ videoID:"JOWFPTzK7D4", videoTitle:"The Mecca Mystery: Are Muslims Praying In The Wrong Direction? | Sacred City | Timeline" , videoTopic:"Science" }, 
{ videoID:"4aXtAWOxBNA", videoTitle:"ASK DR ZAKIR - AN EXCLUSIVE OPEN QUESTION & ANSWER SESSION - 1 | DUBAI | DR ZAKIR NAIK" , videoTopic:"Science" }, 
{ videoID:"E6cKvPo4Dv8", videoTitle:"John L. Esposito - The Future of Islam" , videoTopic:"Science" }, 
{ videoID:"INIG636SnU4", videoTitle:"Islam, Judaism, and Christianity - A Conversation" , videoTopic:"Science" }, 
{ videoID:"Q_szgVMAC-E", videoTitle:"10 Biggest Differences Between ISLAM & JUDAISM" , videoTopic:"Science" },  
{ videoID:"9nZHT0yStEc", videoTitle:"Is it the same God for Muslims, Christians, and Jews?" , videoTopic:"Science" }, 
{ videoID:"oylHszMFlgg", videoTitle:"What if: America's Four Political Parties | Meet The Press | NBC News" , videoTopic:"Science" }, 
{ videoID:"dh3mKgkgWFc", videoTitle:"Trudeau: Canada-U.S. Successful Alliance In History Of The Modern World | Meet The Press | NBC News" , videoTopic:"Science" }, 
{ videoID:"aBglxa6K8gc", videoTitle:"President Trump's Full, Unedited Interview With Meet The Press | NBC News" , videoTopic:"Science" }, 
{ videoID:"K8Z9Kqhrh5c", videoTitle:"Watch In Full: Trump versus Biden in the first US Presidential election debate" , videoTopic:"Science" }, 
{ videoID:"4Ro9H6bmdOg", videoTitle:"Digital oppression in Bangladesh | The Listening Post feature" , videoTopic:"Science" }, 
{ videoID:"9qRxNYuR2c4", videoTitle:"Dictator's Dilemma (Full Episode) | North Korea: Inside the Mind of a Dictator" , videoTopic:"Science" }, 
{ videoID:"NIgqhU4lkgo", videoTitle:"Putin's Way (full documentary) | FRONTLINE" , videoTopic:"Science" }, 
{ videoID:"GC_FFIYz4G0", videoTitle:"Financial Secrecy Index U.S. Launch with FACT" , videoTopic:"Science" }, 
{ videoID:"Gwr7dpyA7qM", videoTitle:"Pelosi's Power (full documentary) | FRONTLINE" , videoTopic:"Science" }, 
{ videoID:"5IBa88VkM6g", videoTitle:"The Crown Prince of Saudi Arabia (full film) | FRONTLINE" , videoTopic:"Science" }, 
{ videoID:"9Hxt3GttF38", videoTitle:"8 INVENTIONS AND TECHNOLOGIES THAT WILL CHANGE OUR WORLD" , videoTopic:"Science" }, 
{ videoID:"Q1mZ4ADUEZs", videoTitle:"Elon Musk's Future City" , videoTopic:"Science" }, 
{ videoID:"SGP6Y0Pnhe4", videoTitle:"HOW IT WORKS: The International Space Station" , videoTopic:"Science" }, 
{ videoID:"5KygwcZ545U", videoTitle:"Shuttle Atlantis STS-132 - Amazing Shuttle Launch Experience" , videoTopic:"Science" }, 
{ videoID:"P4boyXQuUIw", videoTitle:"Mars Science Laboratory Curiosity Rover Animation" , videoTopic:"Science" }, 
{ videoID:"1tOx_Vh5diE", videoTitle:"2021's Breakthroughs in Neuroscience and Other Biology" , videoTopic:"Science" }, 
{ videoID:"nlSL7Qg7-Po", videoTitle:"Intro to Neuroscience" , videoTopic:"Science" }, 
{ videoID:"X3TAROotFfM", videoTitle:"Human digestive system - How it works! (Animation)" , videoTopic:"Science" }, 
{ videoID:"_VhcZTGv0CU", videoTitle:"Immunology in the skin" , videoTopic:"Science" }, 
{ videoID:"yqLlgIaz1L0", videoTitle:"Have you ever seen an atom?" , videoTopic:"Science" }, 
{ videoID:"77FkWW75dX4", videoTitle:"Top 5 Simple Electronics projects" , videoTopic:"Science" }, 
{ videoID:"pSFkiqtGgjs", videoTitle:"simple clap control home-automation.....#clapswitch" , videoTopic:"Science" }, 
{ videoID:"d5lEkz3Bomc", videoTitle:"The Rise and Stagnation of IBM" , videoTopic:"Science" }, 
{ videoID:"LDSiR024aKk", videoTitle:"12 Mac Apps Worth Getting Right Away 2022" , videoTopic:"Science" }, 
{ videoID:"ttjPZufCeno", videoTitle:"Portable Mac Desk Setup 2022 - the Power of the Apple Ecosystem" , videoTopic:"Science" }, 
{ videoID:"Uh9643c2P6k", videoTitle:"Introducing Windows 11" , videoTopic:"Science" }, 
{ videoID:"TGe3djKdblQ", videoTitle:"Windows Insider Webcast - The #BeamMachine" , videoTopic:"Science" }, 
{ videoID:"DEYoAkjN_yc", videoTitle:"Does Windows 11 Gaming Suck" , videoTopic:"Science" }, 
{ videoID:"YqQx75OPRa0", videoTitle:"Beginning Graphic Design: Fundamentals" , videoTopic:"Science" }, 
{ videoID:"r6g6_CJZI_c", videoTitle:"The Best Beginner Motorcycles - Review" , videoTopic:"Science" }, 
{ videoID:"L-Uo3c62a8Q", videoTitle:"Using artificial intelligence to help detect breast cancer | Google Health" , videoTopic:"Science" }, 
{ videoID:"dFCbJmgeHmA", videoTitle:"The Day the Dinosaurs Died – Minute by Minute" , videoTopic:"Science" }, 

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
