import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Disclaimer.scss";

const Disclaimer = () => {
  const [data, setData] = useState(null);
  const [pCount, setPCount] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://avril.2dev.ca/fr/graphql?hash=2832062463&identifiers_1=[%22header_disclaimer%22]"
        );
        setData(response.data.data);
        console.log("dis", response.data.data);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const countParagraphs = () => {
      const paragraphs = document.querySelectorAll(".disclaimer p");
      setPCount(paragraphs.length);

      let current = 0;

      const showNextParagraph = () => {
        paragraphs.forEach((paragraph, index) => {
          if (index === current) {
            paragraph.classList.add("fade-in");
            paragraph.style.display = "block";
          } else {
            paragraph.classList.remove("fade-in");
            paragraph.classList.add("fade-out");
            paragraph.style.display = "none";
          }
        });

        current = (current + 1) % paragraphs.length;

        setTimeout(() => {
          paragraphs.forEach((paragraph, index) => {
            if (index === current) {
              paragraph.classList.remove("fade-out");
              paragraph.classList.add("fade-in");
              paragraph.style.display = "block";
            } else {
              paragraph.classList.remove("fade-in");
              paragraph.classList.add("fade-out");
              paragraph.style.display = "none";
            }
          });

          setTimeout(showNextParagraph, 3000);
        }, 3000);
      };

      showNextParagraph();
    };

    countParagraphs();
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.cmsBlocks || !data.cmsBlocks.items) {
    return <div>Menu unavailable</div>;
  }

  const disclaimerItems = data.cmsBlocks.items;

  return (
    <div>
      <div className="disclaimer">
        {disclaimerItems.map((disclaimerItem, index) => (
          <span
            key={disclaimerItem.item_id}
            className={index === currentParagraph ? "fade-in" : "fade-out"}
            dangerouslySetInnerHTML={{ __html: disclaimerItem.content }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Disclaimer;
