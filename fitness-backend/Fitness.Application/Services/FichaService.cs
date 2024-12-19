using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Fitness.Application.DTOs;
using Fitness.Application.Exercicio.Queries;
using Fitness.Application.Fichas.Command;
using Fitness.Application.Fichas.Query;
using Fitness.Application.Interfaces;
using MediatR;

namespace Fitness.Application.Services
{
    public class FichaService : IFichaService
    {
        private readonly IMediator mediator;
        private readonly IMapper mapper;
        public async Task CreateAsync(FichaDTO fichaDTO)
        {
            var fichaCreateCommand = mapper.Map<FichaCreateCommand>(fichaDTO);
            if(fichaCreateCommand == null)
                throw new Exception("ficha is null in service");

            await mediator.Send(fichaCreateCommand);
        }

        public async Task DeleteAsync(int id)
        {
            var fichaDeleteCommand = new FichaDeleteCommand(id);
            if(fichaDeleteCommand == null)
                throw new Exception("ficha is null in service");

            await mediator.Send(fichaDeleteCommand);
        }

        public async Task<IEnumerable<FichaDTO>> GetAllFichasAsync()
        {
            var getAllExerciciosQuery = new GetAllExerciciosQuery();
            if(getAllExerciciosQuery == null)
                throw new Exception("ficha is null in service");
            
            var result = await mediator.Send(getAllExerciciosQuery);
            return mapper.Map<IEnumerable<FichaDTO>>(result);
        }

        public async Task<FichaDTO> GetFichaByIdAsync(int id)
        {
            var getFichaByIdQuery = new GetFichaByIdQuery(id);
            if(getFichaByIdQuery == null)
                throw new Exception("ficha is null in service");

            var result = await mediator.Send(getFichaByIdQuery);
            return mapper.Map<FichaDTO>(result);
        }

        public async Task UpdateAsync(FichaDTO fichaDTO)
        {
            var fichaUpdateCommand = mapper.Map<FichaUpdateCommand>(fichaDTO);
            if(fichaUpdateCommand == null)
                throw new Exception("ficha is null in service");

            await mediator.Send(fichaUpdateCommand);
        }
    }
}