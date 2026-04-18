import { serve } from '@hono/node-server'
import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'

// --- Enums ---

const GoalSchema = z.enum(['MUSCLE_GAIN', 'WEIGHT_LOSS', 'WEIGHT_GAIN']).openapi('Goal')
const ActivityLevelSchema = z.enum(['ACTIVE', 'MODERATE', 'LESS_ACTIVE']).openapi('ActivityLevel')
const MealTypeSchema = z.enum(['BREAKFAST', 'LUNCH', 'DINNER']).openapi('MealType')
const SkillLevelSchema = z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).openapi('SkillLevel')
const DatePlanSchema = z.enum(['TODAY', 'TOMORROW', 'DAY_AFTER_TOMORROW']).openapi('DatePlan')
const PlansSchema = z.enum(['FREE', 'PRO', 'PREMIUM']).openapi('Plans')

// --- Schemas ---

const RecipeBriefSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  time: z.number(),
  calories_kcal: z.number(),
  protein_g: z.number(),
  keywords: z.array(z.string()),
  favourite: z.boolean(),
  ingredients: z.array(z.string()),
  steps: z.array(z.string()),
}).openapi('RecipeBrief')

const RecipeObjectSchema = z.object({
  recipeName: z.string(),
  timeToPrepare: z.number(),
  description: z.string(),
  calories: z.number(),
  protein: z.number(),
  ingredients: z.array(z.string()),
  mealType: z.string(),
  steps: z.array(z.string()),
  skillLevel: z.string(),
  cuisine: z.array(z.string()),
  keywords: z.array(z.string()),
}).openapi('RecipeObject')

const MealPlanSchema = z.object({
  id: z.string(),
  date: z.string().datetime(),
  mealType: MealTypeSchema,
  userId: z.string(),
  recipeId: z.string(),
  recipe: RecipeBriefSchema.optional(),
}).openapi('MealPlan')

const PersonalListItemSchema = z.object({
  id: z.string(),
  ingrediantName: z.string(),
  tags: DatePlanSchema,
  date: z.string().datetime(),
  mealType: MealTypeSchema,
  completed: z.boolean(),
  userId: z.string(),
}).openapi('PersonalListItem')

const UserPreferencesSchema = z.object({
  name: z.string(),
  age: z.number(),
  goal: GoalSchema,
  calorieRequirement: z.number(),
  proteinRequirement: z.number(),
  weight: z.number(),
  dietaryPreferences: z.array(z.string()),
  allergies: z.array(z.string()),
  height: z.number(),
  workoutCommitment: z.number(),
  preferredCuisines: z.array(z.string()),
  activityLevel: ActivityLevelSchema,
}).openapi('UserPreferences')

const UserPreferencesUpdateSchema = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
  goal: z.string().optional(),
  calorieRequirement: z.number().optional(),
  proteinRequirement: z.number().optional(),
  weight: z.number().optional(),
  height: z.number().optional(),
  workoutCommitment: z.number().optional(),
  dietaryPreferences: z.array(z.string()).optional(),
  allergies: z.array(z.string()).optional(),
  preferredCuisines: z.array(z.string()).optional(),
  activityLevel: z.string().optional(),
}).openapi('UserPreferencesUpdate')

// --- Routes ---

const getCreditsRoute = createRoute({
  method: 'get',
  path: '/credits-and-tier',
  request: {
    headers: z.object({
      userId: z.string().openapi({ example: 'user_123' })
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            credits: z.number(),
            tierPlan: PlansSchema
          })
        }
      },
      description: 'Get user credits and tier'
    }
  }
})

const generateRecipeRoute = createRoute({
  method: 'post',
  path: '/generate-recipe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            time: z.number(),
            calories_kcal: z.number(),
            protein_g: z.number(),
            mealType: z.string(),
            skillLevel: z.string(),
            cuisine: z.string(),
            additionalPrompt: z.string().optional()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: RecipeObjectSchema
        }
      },
      description: 'Recipe generated successfully'
    }
  }
})

const getMealsRoute = createRoute({
  method: 'get',
  path: '/meals',
  request: {
    query: z.object({
      userId: z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            mealPlans: z.array(MealPlanSchema)
          })
        }
      },
      description: 'Get meal plans'
    }
  }
})

const postMealRoute = createRoute({
  method: 'post',
  path: '/meals',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            date: z.string(),
            mealType: MealTypeSchema,
            userId: z.string(),
            recipeId: z.string()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            mealPlan: MealPlanSchema
          })
        }
      },
      description: 'Meal plan saved'
    }
  }
})

const getRecipesRoute = createRoute({
  method: 'get',
  path: '/recipes',
  request: {
    query: z.object({
      userId: z.string(),
      page: z.string().optional().default('1'),
      limit: z.string().optional().default('6'),
      search: z.string().optional()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            recipes: z.array(RecipeBriefSchema),
            totalPages: z.number(),
            currentPage: z.number()
          })
        }
      },
      description: 'Get paginated recipes'
    }
  }
})

const getPersonalListRoute = createRoute({
  method: 'get',
  path: '/personal-list',
  request: {
    headers: z.object({
      'user-id': z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.array(PersonalListItemSchema)
        }
      },
      description: 'Fetch personal list items'
    }
  }
})

const postPersonalListRoute = createRoute({
  method: 'post',
  path: '/personal-list',
  request: {
    headers: z.object({
      'user-id': z.string()
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({
            ingredientName: z.string(),
            meal: MealTypeSchema,
            tags: DatePlanSchema
          })
        }
      }
    }
  },
  responses: {
    201: {
      content: {
        'application/json': {
          schema: PersonalListItemSchema
        }
      },
      description: 'Item created'
    }
  }
})

const patchPersonalListRoute = createRoute({
  method: 'patch',
  path: '/personal-list',
  request: {
    headers: z.object({
      'user-id': z.string(),
      'item-id': z.string()
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({
            completed: z.boolean()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PersonalListItemSchema
        }
      },
      description: 'Item updated'
    }
  }
})

const deletePersonalListRoute = createRoute({
  method: 'delete',
  path: '/personal-list',
  request: {
    headers: z.object({
      'user-id': z.string(),
      'item-id': z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      },
      description: 'Item deleted'
    }
  }
})

const getPreferencesRoute = createRoute({
  method: 'get',
  path: '/preferences',
  request: {
    headers: z.object({
      'user-id': z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserPreferencesSchema
        }
      },
      description: 'Get user preferences'
    }
  }
})

const postPreferencesRoute = createRoute({
  method: 'post',
  path: '/preferences',
  request: {
    headers: z.object({
      'user-id': z.string()
    }),
    body: {
      content: {
        'application/json': {
          schema: UserPreferencesUpdateSchema
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            user: z.any() // Should be full User schema but keeping it simple for now
          })
        }
      },
      description: 'Preferences updated'
    }
  }
})

const getStatisticsRoute = createRoute({
  method: 'get',
  path: '/statistics',
  request: {
    headers: z.object({
      'user-id': z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            plannedMeals: z.number(),
            planningProgress: z.number(),
            dailyCalories: z.number(),
            savedRecipes: z.number()
          })
        }
      },
      description: 'Get dashboard statistics'
    }
  }
})

const toggleFavouriteRoute = createRoute({
  method: 'post',
  path: '/toggle-favourite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            recipeId: z.string(),
            favourite: z.boolean()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            recipe: RecipeBriefSchema
          })
        }
      },
      description: 'Favourite status toggled'
    }
  }
})

const getUpcomingMealsRoute = createRoute({
  method: 'get',
  path: '/upcoming-meals',
  request: {
    headers: z.object({
      'user-id': z.string()
    })
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            meals: z.array(z.object({
              date: z.string().datetime(),
              breakfast: RecipeBriefSchema.nullable(),
              lunch: RecipeBriefSchema.nullable(),
              dinner: RecipeBriefSchema.nullable()
            }))
          })
        }
      },
      description: 'Get upcoming meals'
    }
  }
})

const saveRecipeAiRoute = createRoute({
  method: 'post',
  path: '/save-recipe-ai',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            recipeName: z.string(),
            description: z.string(),
            timeToPrepare: z.number(),
            calories: z.number(),
            protein: z.number(),
            ingredients: z.array(z.string()),
            mealType: z.string(),
            steps: z.array(z.string()),
            skillLevel: z.string(),
            cuisine: z.array(z.string()),
            keywords: z.array(z.string()),
            ownerId: z.string()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            recipe: RecipeBriefSchema
          })
        }
      },
      description: 'AI Recipe saved'
    }
  }
})

const recipeManualRoute = createRoute({
  method: 'post',
  path: '/recipe-manual',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            title: z.string(),
            description: z.string(),
            time: z.number(),
            calories_kcal: z.number(),
            protein_g: z.number(),
            ingredients: z.array(z.string()),
            mealType: z.string(),
            steps: z.array(z.string()),
            skillLevel: z.string(),
            cuisine: z.array(z.string()),
            favourite: z.boolean(),
            ownerId: z.string()
          })
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            recipe: RecipeBriefSchema
          })
        }
      },
      description: 'Manual Recipe saved'
    }
  }
})

// --- App ---

const app = new OpenAPIHono()

// Dummy implementations (can be replaced with actual logic if needed, but here just for documentation)
app.openapi(getCreditsRoute, (c) => c.json({ credits: 10, tierPlan: 'FREE' }))
app.openapi(generateRecipeRoute, (c) => c.json({} as any))
app.openapi(getMealsRoute, (c) => c.json({ mealPlans: [] }))
app.openapi(postMealRoute, (c) => c.json({ success: true, mealPlan: {} as any }))
app.openapi(getRecipesRoute, (c) => c.json({ recipes: [], totalPages: 0, currentPage: 1 }))
app.openapi(getPersonalListRoute, (c) => c.json([]))
app.openapi(postPersonalListRoute, (c) => c.json({} as any))
app.openapi(patchPersonalListRoute, (c) => c.json({} as any))
app.openapi(deletePersonalListRoute, (c) => c.json({ message: 'Item deleted' }))
app.openapi(getPreferencesRoute, (c) => c.json({} as any))
app.openapi(postPreferencesRoute, (c) => c.json({ success: true, user: {} }))
app.openapi(getStatisticsRoute, (c) => c.json({ plannedMeals: 0, planningProgress: 0, dailyCalories: 0, savedRecipes: 0 }))
app.openapi(toggleFavouriteRoute, (c) => c.json({ success: true, recipe: {} as any }))
app.openapi(getUpcomingMealsRoute, (c) => c.json({ meals: [] }))
app.openapi(saveRecipeAiRoute, (c) => c.json({ success: true, recipe: {} as any }))
app.openapi(recipeManualRoute, (c) => c.json({ success: true, recipe: {} as any }))

// --- Documentation ---

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Healthy Plate API',
  },
})

app.get('/ui', swaggerUI({ url: '/doc' }))

const port = 8787
console.log(`Server is running on http://localhost:${port}/ui`)

serve({
  fetch: app.fetch,
  port
})

export default app