export async function getFile({ filePath, fileName, fileFormat }) {
  const response = await fetch(filePath);
  const blob = await response.blob();
  const file = new File([blob], fileName, {
    type: fileFormat,
  });
  return file;
}
