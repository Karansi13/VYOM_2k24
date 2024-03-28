import Footer from "@/components/Footer";
import Title from "@/components/Head";
import Header from "@/components/Header";
import Navlink from "@/components/Navlink";
import React from "react";

export default function EventLinks() {
  return (
    <>
      <div className="h-fit w-screen bg-black">
        <Title
          title={"Contact - Vyom"}
          description={"Feel free to contact us"}
          route={"/contact"}
        />
        <Header id="Navbar" />
        <main className='bg-[url("/contact.png")] min-h-[50vh] flex justify-center font-chakra '>
          <div className="flex flex-col text-center justify-center ite h-full w-[80%] my-14">
            <div className="flex font-chakra italic justify-center border-gray/40 border-b-[1.5px] lg:border-t-[1.5px] xl:border-t-0 min-h-[7rem] items-center font-bold text-4xl pl-5 pr-4">
              <caption className="text-white">
                <Navlink name={"ALL EVENTS"} link={"/"} />
              </caption>
            </div>

            <table>
              <thead>
                <tr>
                  <th className="text-bold text-2xl" scope="col">
                    Events
                  </th>
                  <th className="text-bold text-2xl" scope="col">
                    Registration Links
                  </th>
                </tr>
              </thead>
              <tbody className="text-xl">
                <tr>
                  <td data-label="Box Cricket">Box Cricket</td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className=" gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeYKIjXzgYfKdca0Jj80sFjQfpNqNU2QCsYohYR-A8VrPPG-w/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Hackathon">
                    Hackathon - Hack For Impact
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://unstop.com/p/hack-the-impact-vyom24-rungta-educational-foundation-942216"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>

                {/* add more events from here */}

                <tr>
                  <td scope="row" data-label="Football">
                    Football Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdFAcHRuM-97Mq1Mlr_2KVSaRXJjXvUR_E4E1D2QMToxQFsfQ/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Carrom">
                    Carrom Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfWHfyXv5rHBgGs07gK94gXjkrcEYOdhgS5CnXN_wGfljFmnw/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="BasketBall">
                    BasketBall Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeSoGkmkYkR2A5mxs1mPZHUJWoIAGkMFTt59z1yZJpVdN2YvQ/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="VolleyBall">
                    VolleyBall Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdX7hHaRiLj4we_elj3BMu4Sf3_kiue1WZr6ALw2uLt88CK8Q/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Chess">
                    Chess Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfQmJd-2NIoafWkX4sDhaPxfIrsIoiIdpQZcPaNCwTEB7rQwA/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Solo-Dance">
                    Solo-Dance Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScrS6EpMSMH1DwEn7A22jFXxe96rpPxmE46ymmyd3ZCDVWVgw/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Group-Dance">
                    Group-Dance Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfaw7_bGaode6PKV0jPCYHHAootw4-LSpPhTbTqLdtnEsycTg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Face-Battle">
                    Face-Battle Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdwgjMmyv081TNCsavqy0qv1rbTKQ1ZiKcKG2taRPWIo5Tl3g/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Solo-Song">
                    Solo-Song Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdSgdf8ndob9sytFkeukfEK5F4MZp5P01y5b6L5oPplsISiAA/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Group-Song">
                    Group-Song Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScrS6EpMSMH1DwEn7A22jFXxe96rpPxmE46ymmyd3ZCDVWVgw/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Photography">
                    Photography
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc_WGjE7SkxGwhHmsMrIitgHfvdP5c2UpPo5FfdB6nRUP5qmQ/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Reel-Making">
                    Reel-Making Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfOhZntDVkw5SUgZmx8WGI6wIPkGe3ClszYREI3KedByzWJ0A/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Stand-Up Comedy">
                    Stand-Up Comedy
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdJd8ObmUu2ked9v1KCMQH1nTRV7pn9p98qxj9D3jkWtKIpyg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Story Telling">
                    Story Telling Compitition
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScJi0ElGlwjNdT82RJYQZUc_rJT6kte1nOZfhR-8Wv-01fxsA/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Vlog Comp">
                    Vlog Comp
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScpT-wqz6c4vXRbtAWWhTiTjvBHltcyLGsoI-yBP9DujN-l3g/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Stall">
                    Stall
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfVphkNStfFWvXU-vs7Z6E8YMHHb0638JJmDdiptKCXpo7x_g/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Idea Pitching">
                    Idea Pitching
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdViUqwLXPr4VD4vKrxAO-UNuG80B_q1isMoiTbcrJWuq5lHg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Robo War">
                    Robo War
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScuGg0jqQgooygggisd0NqvLiZD8zc6M1COyMJRlldbhbT3sA/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="BGMI">
                    BGMI
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSce3eHCAeWvXIjHKxi3LR_MEy1g6b4tgoru6B3GN9uS0VVeAg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Valorant">
                    Valorant
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf0WDh03ZIf4TcYYiXKvJlEFEewNIfVF1_bNVKT-ag2LrXIjg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Tug of War">
                    Tug of War
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd6nIOsqlI7OUfYLYzGgj7V5uWKk56oVAlzdTd97QaBvT8BmA/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Arm Wrestling">
                    Arm Wrestling
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfI5b-dZf8BCDB07y3DADJNtL169Ev1fjqaIwCaUBADA70opw/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Band War">
                    Band War
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdmUe_7tpM2hZFghvBlWOqoSUDSX465p4dwvgRZfzBGEGnDCg/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Keep on Speaking">
                    Keep on Speaking
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfK7dDTrJxrLWS5Mz4X0V1OKaXVhlW1rB21gbYM948AeNbs6A/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row" data-label="Treasure Hunt">
                    Treasure Hunt
                  </td>
                  <td data-label="Registration Link" className="underline">
                    <a
                      className="flex justify-center items-center flex-row  gap-3"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc9lWsvAMcsTUlmxfnxHVjFGA_AXuCZvr1YMiGt9rw9IBUEZw/viewform"
                      target="_blank"
                    >
                      Registration Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
