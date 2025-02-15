using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fitness.Application.Exercicio.Queries;
using Fitness.Domain.Entites;
using Fitness.Domain.Interfaces;
using MediatR;

namespace Fitness.Application.Exercicio.Handlers
{
    public class GetExercicioByIdQueryHandler : IRequestHandler<GetExercicioByIdQuery, Exercicios>
    {
        private readonly IExerciciosRepository exerciciosRepository;
        public GetExercicioByIdQueryHandler(IExerciciosRepository exerciciosRepository)
        {
            this.exerciciosRepository = exerciciosRepository;
        }
        public async Task<Exercicios> Handle(GetExercicioByIdQuery request, CancellationToken cancellationToken)
        {
            var exercicio =  await exerciciosRepository.GetExercicioByIdAsync(request.Id);
            if(exercicio == null)
                throw new ApplicationException("Erro when get exercicio by id on handler");

            return exercicio;
        }
    }
}