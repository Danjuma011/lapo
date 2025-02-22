

  export interface CardRequest {
    branch: string;
    initiator: string;
    quantity: number;
    batch: string;
    dateRequested: string; 
    status: string 
    cardType?: string;
    cardCharges?: number;
  }

  export interface CardProfile 
    {
      cardName: string,
      curency: string,
      expiration: number,
      binPrefix: string,
      dateCreated: string,
    }
  

   export interface CardDetails {
      cardName: string;
      binPrefix: string;
      cardScheme: string;
      expiration: string; 
      description: string; 
      currency: string;
      branchBlacklist:string
    }

    export interface Fee {
      name: string;
      value: number;
      frequency: string;
      currency: string;
      time?: string;
      accountPad: string;
      account: string;
      feeImpact: string;
    }
    
    