import Tabs from "./Tabs.jsx";

const TabsParent = () => {

   const tabs = [
      {
         label  : 'India vs Pakistan',
         content: <div>
            winner is India
            <img src="https://www.mykhel.com/img/2024/07/india-vs-pakistan-champions-trophy-date-ft-1720013990.jpg"
                 width="600px"
                 alt="match pic"/>
         </div>
      },
      {
         label  : 'trump vs canada',
         content: <div>
            <img src="https://www.reuters.com/resizer/v2/GJEZMOJ42NP4REC7K3LZOCM3MM.jpg?auth=d80348069619e46c76b654d0e08e8c5b8a4b5fb02f09b2246c30a5457878af08&height=1005&width=1920&quality=80&smart=true"
                 alt="donald trump"
            width="600px"/>
            <h4>President Trump is exempting automakers from newly imposed tariffs on Mexico and Canada for one month,
               the White House said Wednesday, as a temporary reprieve following pleas from industry leaders.

               “We are going to give a one-month exemption on any autos coming through USMCA,” White House Press
               Secretary Karoline Leavitt said, referring to the trade deal Trump negotiated with Canada and Mexico in
               his first term. “Reciprocal tariffs will still go into effect on April, 2, but at the request of the
               companies associated with USMCA, the president is giving them an exemption for one month so they are not
               at an economic disadvantage.”</h4>
         </div>

      },
      {
         label  : 'tab3',
         content: <h1>no content yet</h1>
      },
      {
         label  : "yuvraj Singh",
         content: <h3>After his retirement, former India cricketer Yuvraj Singh took to social media and posted a
            heartfelt note, paying his tribute to Smith’s exceptional career. It is worth noting that Smith made his ODI
            debut for Australia in 2010 and went on to play 170 matches in the format. Furthermore, he scored 5800 runs
            in the format, hitting 12 centuries throughout his career. Highlighting how brilliant his career has been,
            Yuvraj Singh posted a note after Smith announced his retirement. “Steve, I still remember the young lad who
            walked into the Pune Warriors camp in 2012 - hungry to learn, eager to prove himself. Watching you grow from
            strength to strength, shaping yourself into one of the greats of the game, has been nothing short of
            incredible. From those early days to becoming a two-time World Cup winner, your journey has been one of
            dedication and perseverance,” Yuvraj Singh tweeted.

            “Your impact on the game goes beyond numbers - your resilience, your hunger, and your ability to rise in the
            biggest moments have made you a true champion. As you step away from ODIs, know that you’ve left behind a
            legacy that will inspire generations. Wishing you the very best for the road ahead, mate!” Yuvraj
            added.</h3>
      }
   ];

   // function handleChange(currentTabIndex) {
   //    console.log(currentTabIndex)
   // }

   return (
      <Tabs tabsContent={tabs} />
   );
};

export default TabsParent;