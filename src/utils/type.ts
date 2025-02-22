

  export interface CardRequest {
    branch: string;
    initiator: string;
    quantity: number;
    batch: string;
    dateRequested: string; 
    status: string 
    cardType?: string;
    cardCharges?: string;
  }