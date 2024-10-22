export default (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data) {
    const isSuccess = res.statusCode >= 200 && res.statusCode < 300;

    if (isSuccess) {
      originalJson.call(this, {
        success: isSuccess,
        data
      });

      return
    }

    let dataError = data;
    if (data instanceof Error) {
      dataError = {
        message: data.message
      }
    }

    originalJson.call(this, {
      success: isSuccess,
      data: dataError
    });
  };

  next();
}