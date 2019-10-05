import { Request, Response } from 'express';

import { Converter } from './Converter';

export const handleConvert = (req: Request, res: Response): Response => {
  let num = +req.params.n;

  if (isNaN(num)) {
    return res.status(500).send('Передано не число');
  }

  const converter = new Converter(num);
  let converted: string;

  try {
    converted = converter.convert();
  } catch (e) {
    let err: Error = e;

    return res.status(500).send(err.message);
  }

  return res.status(200).send(converted);
};
