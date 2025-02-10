import { data } from "./data";
import { Data, Label, ServiceData } from "./interfaces";

class ServiceDataImpl implements ServiceData {
  async getData(): Promise<Data[]> {
    // // Example implementation: Fetch data from a hypothetical API endpoint
    // const response = await fetch("https://api.example.com/labels");
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    // const data: Label[] = await response.json();
    return data;
  }
}

export default new ServiceDataImpl();
