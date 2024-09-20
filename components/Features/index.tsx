'use client'
import React, { useState } from 'react';
import { Slider, Input, InputNumber, Select, Switch, Segmented } from "antd";
import { FaPlus } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";

// Define a type for the network options
type NetworkOption = {
  value: string;
  label: React.ReactNode;
};

type ExchangeOption = {
  value: string;
  label: string;
};

type TabsProps = {
  value: string;
  label: React.ReactNode;
}

const networkOptions: NetworkOption[] = [
  { value: 'eth', label: <span className="flex items-center gap-2"><img src="/images/header/eth.svg" alt="Ethereum" style={{ width: 24, height: 24, marginRight: 8 }} />Ethereum</span> },
  { value: 'arb', label: <span className="flex items-center gap-2"><img src="/images/header/fair.svg" alt="Arbitrum" style={{ width: 24, height: 24, marginRight: 8 }} />Arbitrum</span> },
  { value: 'base', label: <span className="flex items-center gap-2"><img src="/images/header/watcher.svg" alt="Base" style={{ width: 24, height: 24, marginRight: 8 }} />Base</span> },
  { value: 'sol', label: <span className="flex items-center gap-2"><img src="/images/header/solana.svg" alt="Solana" style={{ width: 24, height: 24, marginRight: 8 }} />Solana</span> },
];

const exchangeOption: ExchangeOption[] = [
  { value: '1', label: 'Uniswap V2' },
  { value: '2', label: 'Uniswap V3' },
  { value: '3', label: 'Uniswap V4' },
];

const walletTabOption: TabsProps[] = [
  { value: '1', label: <span className="text-xs md:text-base">Generate Fresh Wallets</span> },
  { value: '2', label: <span className="text-xs md:text-base">Use My Own Wallets</span> },
];

const liqTabOption: TabsProps[] = [
  { value: '1', label: <span className="text-xs md:text-base font-medium">Locked For: 6 months <span className="text-[rgba(37,99,235,1)]"> edit</span></span> },
  { value: '2', label: <span className="text-xs md:text-base font-medium">Burn</span> },
];

const Features = () => {

  const [selectNetworkValue, setSelectNetworkValue] = useState<string>(networkOptions[0].value);
  const [selectExchange, setSelectExchange] = useState<string>(exchangeOption[0].value);
  const [selectExchangeDex, setSelectExchangeDex] = useState<string>(exchangeOption[0].value);
  const [liquidFee, setLiquidFee] = useState<{buy: number; sell: number}>({ buy: 0, sell: 0 });
  const [marketingFee, setMarketingFee] = useState<{buy: number; sell: number}>({ buy: 0, sell: 0 });
  const [taxWallets, setTaxWallets] = useState<string[]>([]); // New state for wallets
  const [walletFees, setWalletFees] = useState<{ buy: number; sell: number }[]>([]); // New state for wallet fees
  const [burnFee, setBurnFee] = useState<{buy: number; sell: number}>({ buy: 0, sell: 0 });
  const [walletTab, setWalletTab] = useState<string>(walletTabOption[0].value);
  const [liqTab, setLiqTab] = useState<string>(liqTabOption[0].value);
  const [freshWalletCount, setFreshWalletCount] = useState<number>(0);
  const [ownWalletCount, setOwnWalletCount] = useState<number>(0);
  const [viewPKList, setViewPKList] = useState<boolean[]>([]); // New state for view PK
  const [totalSupply, setTotalSupply] = useState<number>(0);

  const handleNetworkChange = (value: string) => {
    setSelectNetworkValue(value);
  }

  const handleExchangeChange = (value: string) => {
    setSelectExchange(value);
  }

  const handleLiquidFee = (value: number, type: 'buy' | 'sell') => {
    setLiquidFee(prev => ({
      ...prev,
      [type]: value // Set the value for the specified type
    }));
  }

  const handleMarketingFee = (value: number, type: 'buy' | 'sell') => {
    setMarketingFee(prev => ({
      ...prev,
      [type]: value // Set the value for the specified type
    }));
  }

  const handleAddTaxWallet = () => {
    setTaxWallets([...taxWallets, ""]); // Add a new empty wallet entry
  }

  const handleWalletFeeChange = (index: number, type: 'buy' | 'sell', value: number) => {
    const updatedFees = [...walletFees];
    if (!updatedFees[index]) {
        updatedFees[index] = { buy: 0, sell: 0 }; // Initialize if not present
    }
    updatedFees[index][type] = value;
    setWalletFees(updatedFees);
  }

  const handleBurnFee = (value: number, type: 'buy' | 'sell') => {
    setBurnFee(prev => ({
      ...prev,
      [type]: value // Set the value for the specified type
    }));
  }

  return (
    <>
      <section id="features">
        <div className="container flex flex-col gap-4 justify-center items-center">

          <button className="button_css min-w-[150px] py-3 px-4 text-base text-[rgba(248,250,252,1)] text-center font-bold rounded-xl bg-[rgba(14,118,253,1)] hover:bg-[rgba(14,118,253,0.8)] hover:animate-pulse">
            Connect Wallet
          </button>
          <div className="w-full flex flex-col gap-4">
            {/* ----------------- First Section ----------------- */}
            <div className="card_css">
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-7 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="w-full sm:w-1/2 flex flex-col gap-3">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Token Name</p>
                    <Input className="input_css p-3" placeholder="Awesome Token"/>
                  </div>
                  <div className="w-full sm:w-1/2 flex flex-col gap-3">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Token Symbol</p>
                    <Input className="input_css p-3" placeholder="Awesome"/>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Blockchain Network</p>
                  <Select
                    className="w-full h-12"
                    value={selectNetworkValue}
                    onChange={handleNetworkChange} // Simplified onChange
                    options={networkOptions} // Used constant for options
                    optionLabelProp="label" // Add this line
                  />
                </div>
                <div className="w-full flex justify-between items-center p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Custom Decimals</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Change the number of decimals for your token.</p>
                  </div>
                  <Switch className="bg-[#E2E8F0]"/>
                </div>
              </div>
            </div>

            {/* ----------------- Second Section ----------------- */}
            <div className='card_css flex flex-col gap-4 p-4'>
              <div className="w-full flex justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Enable Max Wallet Limit</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Limits the maximum number of tokens that can be held by a single wallet.</p>
                </div>
                <Switch className="bg-[#E2E8F0]"/>
              </div>
              <div className="w-full flex justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Enable Max Transaction Limit</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Limits the maximum number of tokens that can be transferred in a single transaction.</p>
                </div>
                <Switch className="bg-[#E2E8F0]"/>
              </div>
              <div className="w-full flex justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Enable Blacklist</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Allows the owner to blacklist accounts to disable transfers and token use.</p>
                </div>
                <Switch className="bg-[#E2E8F0]"/>
              </div>
              <div className="w-full flex justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Separate Buy & Sell Fees</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Allows you to set different fees for buying and selling the token.</p>
                </div>
                <Switch className="bg-[#E2E8F0]"/>
              </div>
              <div className="w-full flex justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Apply Fees on Transfers</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Apply fees on transfers between wallets. Applies buy fees for Transfers.</p>
                </div>
                <Switch className="bg-[#E2E8F0]"/>
              </div>
            </div>

            {/* ----------------- Thrid Section ----------------- */}
            <div className='card_css'>
              <div className='flex flex-col gap-3 p-4'>
                <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Token Supply</p>
                <InputNumber className="input_css p-3 w-full" min={1}/>
              </div>
            </div>

            {/* ----------------- Thrid Section ----------------- */}
            <div className='card_css'>
              <div className='flex flex-col gap-4 p-4 border-b-[1px] border-[rgba(226,232,240,1)]'>
                <div className='flex flex-col gap-1'>
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Liquidity Fees</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">The percentage of the transaction that will be added to the liquidity pool. Maximum of 10%.</p>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-10'>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Liquidity Fee (Buy)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={liquidFee?.buy} onChange={(value: number) => handleLiquidFee(value, 'buy')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{liquidFee?.buy}%</p>
                    </div>
                  </div>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Liquidity Fee (Sell)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={liquidFee?.sell} onChange={(value: number) => handleLiquidFee(value, 'sell')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{liquidFee?.sell}%</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Exchange</p>
                  <Select 
                    className='w-full h-12'
                    value={selectExchange}
                    onChange={handleExchangeChange}
                    options={exchangeOption}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4 p-4 border-b-[1px] border-[rgba(226,232,240,1)]'>
                <div className='flex flex-col gap-1'>
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Fee</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">The percentage of the transaction that will be sent to wallet set here. Maximum of 10%.</p>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-10'>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Fee (Buy)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={marketingFee?.buy} onChange={(value: number) => handleMarketingFee(value, 'buy')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{marketingFee?.buy}%</p>
                    </div>
                  </div>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Fee (Sell)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={marketingFee?.sell} onChange={(value: number) => handleMarketingFee(value, 'sell')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{marketingFee?.sell}%</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Wallet</p>
                  <div className='w-full inline-flex gap-10 md:gap-40 items-center'>
                    <Input className="input_css p-3 flex-1" placeholder="0x0000000000000000000000000000000000000000" />
                    <button 
                      className='w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-[rgba(226,232,240,1)] flex justify-center items-center bg-white'
                      onClick={() => handleAddTaxWallet()}
                    >
                      <FaPlus className='text-[rgba(38,99,235,1)] w-6 h-6 md:w-10 md:h-10'/>
                    </button>
                  </div>
                </div>
              </div>
              
              {taxWallets.map((wallet, index) => ( // Map over wallets to render each section
                <div key={index} className='w-full flex p-4 border-b-[1px] border-[rgba(226,232,240,1)]'>
                    <div className='w-full flex flex-col gap-4'>
                      <div className='flex flex-col gap-1'>
                        <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">New Tax Wallet</p>
                        <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">The percentage of the transaction that will be sent to wallet set here. Maximum of 10%.</p>
                      </div>

                      <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-10'>
                        <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                          <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Fee (Buy)</p>
                          <div className='inline-flex items-center gap-4'>
                            <Slider className='flex-1' value={walletFees[index]?.buy || 0} onChange={(value: number) => handleWalletFeeChange(index, 'buy', value)}/>
                            <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{walletFees[index]?.buy || 0}%</p>
                          </div>
                        </div>
                        <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                          <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Marketing/Operations Fee (Sell)</p>
                          <div className='inline-flex items-center gap-4'>
                            <Slider className='flex-1' value={walletFees[index]?.sell || 0} onChange={(value: number) => handleWalletFeeChange(index, 'sell', value)}/>
                            <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{walletFees[index]?.sell || 0}%</p>
                          </div>
                        </div>
                      </div>  

                      <div className='w-full inline-flex gap-4 md:gap-10 items-center'>
                        <div className='flex-1 flex flex-col sm:flex-row gap-4'>
                          <Input className="w-full sm:w-1/3 input_css p-3" placeholder="Enter New Tax Wallet Name" />
                          <Input className="w-full sm:w-2/3 input_css p-3" placeholder="0x0000000000000000000000000000000000000000" />
                        </div>
                        <button 
                            className='w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-[rgba(226,232,240,1)] flex justify-center items-center bg-white'
                            onClick={() => handleAddTaxWallet()}
                        >
                            <FaPlus className='text-[rgba(38,99,235,1)] w-6 h-6 md:w-10 md:h-10'/>
                        </button>
                      </div>
                    </div>
                </div>
              ))}
            
              <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-1'>
                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Burn Fee</p>
                  <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">The percentage of the transaction that will be burned. Maximum of 10%.</p>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-10'>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Burn Fee (Buy)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={burnFee?.buy} onChange={(value: number) => handleBurnFee(value, 'buy')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{burnFee?.buy}%</p>
                    </div>
                  </div>
                  <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Burn Fee (Sell)</p>
                    <div className='inline-flex items-center gap-4'>
                      <Slider className='flex-1' value={burnFee?.sell} onChange={(value: number) => handleBurnFee(value, 'sell')}/>
                      <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{burnFee?.sell}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- Fourth Section ----------------- */}
            <div className="card_css">
              <div className='flex flex-col'>
                <div className="w-full flex justify-between items-center gap-4 md:gap-0 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Add Bundle Wallets</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Add wallets to bundle buy your own launch to ensure you can buy BEFORE snipers.</p>
                  </div>
                  <Switch className="bg-[#E2E8F0]"/>
                </div>
                <div className="w-full flex items-center gap-4 md:gap-0 p-4">
                  <div className="w-full flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Generate Fresh Wallets or Use Existing Wallets?</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">You can instruct the bot to generate fresh wallets to use within your bundle, or add your own wallets to include within the bundle.<br /> Please select which option you’d like to take:</p>
                    <Segmented
                      className='w-full flex justify-center items-center p-1 dashboard_selector'
                      size='large'
                      value={walletTab}
                      style={{ marginBottom: 8 }} // Adjust maxWidth as needed
                      onChange={(value) => setWalletTab(value)}
                      options={walletTabOption}
                    />
                    {walletTab === '1' ? (
                      <div className='w-full flex flex-col gap-2'>
                        <div className='relative w-full md:w-1/2 flex flex-col gap-2 md:pr-2'>
                          <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">How many wallets would you like to add to bundle?</p>
                          <InputNumber 
                            className="input_css p-3 w-full" 
                            value={freshWalletCount}
                            onChange={(value: number) => setFreshWalletCount(value)}
                            min={1} 
                            max={98}
                            size='large'
                          />
                          <div 
                            className='absolute flex gap-1 sm:gap-2 right-[6%] top-[56%] md:top-[54%] cursor-pointer'
                            onClick={() => setFreshWalletCount(98)}
                          >
                            <span className="text-[0.7rem] sm:text-sm font-bold">Max</span>
                            <span className='text-[0.7rem] sm:text-sm'>98</span>
                          </div>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                          {Array.from({ length: freshWalletCount }).map((_, index) => ( // Dynamically create wallet input fields
                            <div className='w-full flex flex-col md:flex-row gap-1 md:gap-4'>
                              <div key={index} className='relative w-full md:w-1/2 flex flex-col gap-1'>
                                {index === 0 && <p className="absolute right-0 text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-bold cursor-pointer">Export All PKs</p>}
                                <div className='w-full flex justify-start items-center'>
                                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Wallet {index + 1}:</p>
                                </div>
                                <div className='relative'>
                                  <Input 
                                    className="input_css p-3" 
                                    placeholder="0x83792HSL28m12499SKJSD9300n12" 
                                    type={viewPKList[index] ? 'text' : 'password'}
                                  />
                                  <div className='absolute right-[2%] top-[35%] cursor-pointer' onClick={() => {
                                    setViewPKList(prev => {
                                      const newList = [...prev];
                                      newList[index] = !newList[index]; // Toggle visibility
                                      return newList;
                                    });
                                  }}>
                                    {viewPKList[index] ? <GoEyeClosed /> : <GoEye />}
                                  </div>
                                </div>
                              </div>
                              <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-2'>
                                <div className='w-full md:w-1/2 flex flex-col gap-1'>
                                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Buy Settings</p>
                                  <InputNumber className="input_css p-3 w-full" min={1} />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                  <div className='w-full flex justify-between items-center'>
                                    <p className="text-[rgba(2,8,23,1)] text-xs font-medium">Auto Set</p>
                                    <p className="text-[rgba(2,8,23,1)] text-xs font-medium">Set Manually</p>
                                  </div>
                                  <InputNumber className="input_css p-3 w-full" min={1} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className='w-full flex flex-col gap-2'>
                        <div className='relative w-full md:w-1/2 flex flex-col gap-2 md:pr-2'>
                          <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">How many wallets would you like to add to bundle?</p>
                          <InputNumber 
                            className="input_css p-3 w-full" 
                            value={ownWalletCount}
                            onChange={(value: number) => setOwnWalletCount(value)}
                            min={1} 
                            max={98}
                            size='large'
                          />
                          <div 
                            className='absolute flex gap-1 sm:gap-2 right-[6%] top-[56%] md:top-[54%] cursor-pointer'
                            onClick={() => setOwnWalletCount(98)}
                          >
                            <span className="text-[0.7rem] sm:text-sm font-bold">Max</span>
                            <span className='text-[0.7rem] sm:text-sm'>98</span>
                          </div>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                          {Array.from({ length: ownWalletCount }).map((_, index) => ( // Dynamically create wallet input fields
                            <div className='w-full flex flex-col md:flex-row gap-1 md:gap-4'>
                              <div key={index} className='relative w-full md:w-1/2 flex flex-col gap-1'>
                                {index === 0 && <p className="absolute right-0 text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-bold cursor-pointer">Import PKs</p>}
                                <div className='w-full flex justify-start items-center'>
                                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Wallet {index + 1}:</p>
                                </div>
                                <div className='relative'>
                                  <Input 
                                    className="input_css p-3" 
                                    placeholder="0x83792HSL28m12499SKJSD9300n12" 
                                    type={viewPKList[index] ? 'text' : 'password'}
                                  />
                                  <div className='absolute right-[2%] top-[35%] cursor-pointer' onClick={() => {
                                    setViewPKList(prev => {
                                      const newList = [...prev];
                                      newList[index] = !newList[index]; // Toggle visibility
                                      return newList;
                                    });
                                  }}>
                                    {viewPKList[index] ? <GoEyeClosed /> : <GoEye />}
                                  </div>
                                </div>
                              </div>
                              <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-2'>
                                <div className='w-full md:w-1/2 flex flex-col gap-1'>
                                  <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Buy Settings</p>
                                  <InputNumber className="input_css p-3 w-full" min={1} />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                  <div className='w-full flex justify-between items-center'>
                                    <p className="text-[rgba(2,8,23,1)] text-xs font-medium">Auto Set</p>
                                    <p className="text-[rgba(2,8,23,1)] text-xs font-medium">Set Manually</p>
                                  </div>
                                  <InputNumber className="input_css p-3 w-full" min={1} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- Fifth Section ----------------- */}
            <div className="card_css">
              <div className='flex flex-col'>
                <div className="w-full flex justify-between items-center gap-4 md:gap-0 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Add Initial Liquidity</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Automatically create and fund the liquidity pool, this will allow users to buy your token.</p>
                  </div>
                  <Switch className="bg-[#E2E8F0]"/>
                </div>
                <div className="w-full flex flex-col items-center gap-4 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="w-full flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Token Paring & Funding</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Pair a percentage of your token supply with ETH to fund the liquidity pool. We recommend pairing at least 10% of your token supply with at least 1 ETH.</p>
                  </div>
                  <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-10'>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                      <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Token Supply (%)</p>
                      <div className='inline-flex items-center gap-4'>
                        <Slider className='flex-1' value={totalSupply} onChange={(value: number) => setTotalSupply(value)}/>
                        <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">{totalSupply}%</p>
                      </div>
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                      <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">ETH Amount</p>
                      <InputNumber 
                        className="input_css p-3 w-full" 
                        min={1} 
                      />
                    </div>
                  </div>
                  <div className='relative w-full flex flex-col sm:flex-row gap-4 sm:gap-7 justify-center items-center'>
                    <div className='relative w-full'>
                      <Input 
                        className="input_css !min-h-[74px] text-start sm:text-end pt-[30px] pl-[4.5%] sm:pr-[4%] p-3 w-full" 
                        type='number'
                      />
                      <p className='absolute sm:right-[5%] left-[5%] top-[20%] text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium'>Token</p>
                    </div>
                    <button 
                      className='absolute left-[calc(50%-24px)] z-10 w-12 h-12 rounded-full border-2 border-[rgba(226,232,240,1)] flex justify-center items-center bg-white'
                      onClick={() => handleAddTaxWallet()}
                    >
                      <FaPlus className='text-[rgba(38,99,235,1)] w-10 h-10'/>
                    </button>
                    <div className='relative w-full'>
                      <Input 
                        className="input_css !min-h-[74px] text-start pt-[30px] pl-[4.5%] p-3 w-full" 
                        type='number'
                      />
                      <p className='absolute left-[5%] top-[20%] text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium'>ETH</p>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Based on the selected options and values above, your token will launch with the following initial parameters, including the starting market cap and the starting price of your token.</p>
                  </div>
                  <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-7 justify-center items-center'>
                    <div className='relative w-full'>
                      <Input 
                        className="input_css !min-h-[74px] text-start pt-[30px] pl-[4.5%] sm:pr-[4%] p-3 w-full" 
                      />
                      <p className='absolute left-[5%] top-[18%] text-[rgba(2,8,23,1)] text-xs md:text-base font-medium'>Launch Market Cap</p>
                    </div>
                    <div className='relative w-full'>
                      <Input 
                        className="input_css !min-h-[74px] text-start pt-[30px] pl-[4.5%] p-3 w-full" 
                      />
                      <p className='absolute left-[5%] top-[18%] text-[rgba(2,8,23,1)] text-xs md:text-base font-medium'>Launch Token Price</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                  <div className="w-full flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Exchange (DEX)</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">We'll use the selected DEX to create your liquidity pair and seed the initial pool.</p>
                  </div>
                  <Select 
                    className='w-full h-12'
                    value={selectExchangeDex}
                    onChange={setSelectExchangeDex}
                    options={exchangeOption}
                  />
                </div>
                <div className="w-full flex flex-col items-center gap-4 p-4">
                  <div className="w-full flex flex-col gap-1">
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-medium">Liquidity Action & Ownership</p>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">By default, the liquidity will locked for 6 months. However, you can also choose to adjust the length of time liquidity is locked here.</p>
                  </div>
                  <Segmented
                    className='w-full flex justify-center items-center p-1 dashboard_selector'
                    size='large'
                    value={liqTab}
                    onChange={(value) => setLiqTab(value)}
                    options={liqTabOption}
                  />
                  <div className='w-full'>
                    <p className="text-[rgba(100,116,139,1)] text-[0.7rem] md:text-sm font-normal">Liquidity will automatically be locked for the above duration when trading is enabled. Bohedz will retain the ownership of the liquidity as it’s Service Fee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- Sixth Section ----------------- */}
            <div className='card_css'>
              <div className="w-full flex flex-col items-center gap-4 md:gap-0 p-4 border-b-[1px] border-[rgba(226,232,240,1)]">
                <div className="w-full flex gap-2 justify-between">
                  <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">Token Creation Fee</p>
                  <div className='flex items-center gap-2'>
                    <p className="text-[rgba(2,8,23,1)] text-[0.7rem] md:text-sm font-normal line-through">0.06 ETH</p>
                    <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">0.054 ETH</p>
                  </div>
                </div>
                <div className="w-full flex gap-2 justify-between">
                  <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">ETH for Initial Liquidity</p>
                  <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-normal">1 ETH</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-2'>
                  <p className="text-[rgba(2,8,23,1)] text-xs md:text-base font-bold">1.054 ETH</p>
                  <button className='button_css w-[120px] p-1 text-xs text-[rgba(248,250,252,1)] text-center font-semibold rounded-full bg-[rgba(14,118,253,1)] hover:bg-[rgba(14,118,253,0.8)] hover:animate-pulse'>WAGMI: 10% off</button>
                </div>
              </div>
              <div className='w-full flex justify-center p-4'>
                <button className='button_css w-full py-3 text-sm text-[rgba(248,250,252,1)] text-center font-medium rounded-full bg-[rgba(14,118,253,1)] hover:bg-[rgba(14,118,253,0.8)] hover:animate-pulse'>Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
