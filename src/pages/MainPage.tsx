import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { get } from "../service/apiService";
import { useCheck, useRadioValue } from "../context/InputContext";
import LocationCard from "../components/LocationCard";

function MainPage() {
  const [data, setData] = useState<any>(null);
  const radioValue = useRadioValue();
  const checkLocation = useCheck();
  useEffect(() => {
    if (checkLocation) {
      get("/location").then((response: any) => {
        setData(response.results);
      });
      return;
    }
    if (radioValue !== "") {
      get(`/character/?status=${radioValue}`).then((response: any) => {
        setData(response.results);
      });
      return;
    }
    get("/character").then((response: any) => {
      setData(response.results);
    });
  }, [radioValue, checkLocation]);

  return (
    <div>
      <Filter />
      <div className="card-container">
        {data ? (
          data.map((item: any, index: number) => {
            return (
              <>
                {checkLocation ? (
                  <LocationCard data={item} key={item.name + index + item.id} />
                ) : (
                  <Card data={item} key={item.name + index + item.id} />
                )}
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MainPage;
