import z from 'zod';

const ShelterSchema = z.object({
  id: z.string(),
  name: z.string(),
  pix: z.string().nullable().optional(),
  address: z.string(),
  petFriendly: z.boolean().nullable().optional(),
  shelteredPeople: z.number().nullable().optional(),
  capacity: z.number().nullable().optional(),
  contact: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
});

const CreateShelterSchema = ShelterSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const UpdateShelterSchema = ShelterSchema.pick({
  petFriendly: true,
  capacity: true,
  shelteredPeople: true,
}).partial();

const FullUpdateShelterSchema = ShelterSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).partial();

export {
  ShelterSchema,
  CreateShelterSchema,
  UpdateShelterSchema,
  FullUpdateShelterSchema,
};
