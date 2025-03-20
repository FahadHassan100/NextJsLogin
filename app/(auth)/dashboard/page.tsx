import React from "react";
import TokenBtn from "./components/tokenbtn";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import BookletList from "./components/bookletList";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Justice Trading DGCs Redemption and Transfer for Tokens
      </h1>

      <div className="my-8 flex justify-between w-[50%]">
        <div className="w-[270px]">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">
                Transfer To: <br />
                <br />
                KAMASHINANI FOUNDATION,Maua I Ruiri Junction,P.O Box 37-60202
                Nkubu, Meru County, Kenya
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <TokenBtn />
        </div>
      </div>

      <BookletList />
    </div>
  );
};

export default Dashboard;
