import { RevokeSignerJobPayload } from '@farcaster/protobufs';
import { Factories } from '@farcaster/utils';
import { Factory } from 'fishery';

const RevokeSignerJobPayloadFactory = Factory.define<RevokeSignerJobPayload>(() => {
  return RevokeSignerJobPayload.create({
    fid: Factories.Fid.build(),
    signer: Factories.Ed25519PPublicKey.build(),
  });
});

export const JobFactories = {
  RevokeSignerJobPayload: RevokeSignerJobPayloadFactory,
};
