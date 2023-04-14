export interface CustomData {
  to: string;
  isReplace: boolean;
}

const navigate = (to: string, isReplace = false) => {
  const customData: CustomData = { to, isReplace };
  const historyChangeEvent = new CustomEvent<CustomData>('historychange', {
    detail: customData,
  });

  dispatchEvent(historyChangeEvent);
};

export default navigate;
