'use client'
import React, { useState } from 'react';
import { Slider, Input, Select, Switch } from "antd";

// Define a type for the network options
type NetworkOption = {
  value: string;
  label: React.ReactNode;
};

const networkOptions: NetworkOption[] = [
  { value: 'eth', label: <span className="flex items-center gap-2"><img src="/images/header/eth.svg" alt="Ethereum" style={{ width: 24, height: 24, marginRight: 8 }} />Ethereum</span> },
  { value: 'arb', label: <span className="flex items-center gap-2"><img src="/images/header/fair.svg" alt="Arbitrum" style={{ width: 24, height: 24, marginRight: 8 }} />Arbitrum</span> },
  { value: 'base', label: <span className="flex items-center gap-2"><img src="/images/header/watcher.svg" alt="Base" style={{ width: 24, height: 24, marginRight: 8 }} />Base</span> },
  { value: 'sol', label: <span className="flex items-center gap-2"><img src="/images/header/solana.svg" alt="Solana" style={{ width: 24, height: 24, marginRight: 8 }} />Solana</span> },
];

const Features = () => {

  const [selectValue, setSelectValue] = useState<string> (networkOptions[0].value);

  const handleNetworkChange = (value: string) => { // Changed parameter name for clarity
    setSelectValue(value); // Update state with the selected value
  }

  return (
    <>
      <section id="features">
        <div className="container flex flex-col gap-4 justify-center items-center">

          <button className="button_css min-w-[150px] py-3 px-4 text-base text-[rgba(248,250,252,1)] text-center font-bold rounded-xl bg-[rgba(14,118,253,1)] hover:bg-[rgba(14,118,253,0.8)] hover:animate-pulse">
            Connect Wallet
          </button>
          <div className="w-full flex flex-col gap-4">
            <div className="card_css">
              <div className="flex flex-col">
                <div className="flex w-full gap-4 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="w-1/2 flex flex-col gap-3">
                    <p className="text-[rgba(2,8,23,1)] text-sm font-medium">Token Name</p>
                    <Input className="input_css p-3" placeholder="Awesome Token"/>
                  </div>
                  <div className="w-1/2 flex flex-col gap-3">
                    <p className="text-[rgba(2,8,23,1)] text-sm font-medium">Token Symbol</p>
                    <Input className="input_css p-3" placeholder="Awesome"/>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <p className="text-[rgba(2,8,23,1)] text-sm font-medium">Blockchain Network</p>
                  <Select
                    className="w-full h-12"
                    value={selectValue}
                    onChange={handleNetworkChange} // Simplified onChange
                    options={networkOptions} // Used constant for options
                    optionLabelProp="label" // Add this line
                  />
                </div>
                <div className="w-full flex justify-between items-center p-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[rgba(2,8,23,1)] text-sm font-medium">Custom Decimals</p>
                    <p className="text-[rgba(100,116,139,1)] text-sm font-normal">Change the number of decimals for your token.</p>
                  </div>
                  <Switch className="bg-[#E2E8F0]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
