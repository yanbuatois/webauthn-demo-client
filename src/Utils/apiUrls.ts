const API_ROOT = process.env.REACT_APP_API_ROOT ?? '';

export const getUserDataUrl = (): string => `${API_ROOT}/user`;
