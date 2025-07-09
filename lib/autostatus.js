let autostatus = {
  enabled: true,
  message: "🔥 Nice status bro from POPKID GLE!"
};

export const isAutoStatusOn = () => autostatus.enabled;
export const getAutoStatusMessage = () => autostatus.message;

export const setAutoStatus = (state) => autostatus.enabled = state;
export const setAutoStatusMessage = (msg) => autostatus.message = msg;
